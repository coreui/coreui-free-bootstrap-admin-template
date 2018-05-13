#!/usr/bin/env node

'use strict'

const fs         = require('fs')
const path       = require('path')
const mkdirp     = require('mkdirp')
const sh         = require('shelljs')

const basename   = path.basename
const dirname    = path.dirname
const resolve    = path.resolve
const normalize  = path.normalize
const join       = path.join
const relative   = path.relative
const extension  = path.extname

const src        = 'src/'
const dest       = 'dist/'
const base       = path.resolve(__dirname, '..')

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
    ? walkSync(path.join(dir, file), filelist)
    : filelist.concat(path.join(dir, file))
  })
  return filelist
}

const vendorName = (path) => {
  const nodeModules = Boolean(path.split('/')[0] === 'node_modules')
  const subDir = Boolean(path.indexOf('@') >= 0)
  let vendor
  if (nodeModules) {
    if (subDir) {
      vendor = `${path.split('/')[1]}/${path.split('/')[2]}`
    } else {
      vendor = `${path.split('/')[1]}`
    }
  }
  return vendor
}

function removeDuplicates( arr, prop ) {
  let obj = {};
  return Object.keys(arr.reduce((prev, next) => {
    if(!obj[next[prop]]) obj[next[prop]] = next;
    return obj;
  }, obj)).map((i) => obj[i]);
}

const findVendors = () => {
  const vendors = []
  // const assets = []
  // const vendors = { css: [], js: [], other: [] }
  const filenames = walkSync(src)

  filenames.forEach((filename) => {
    if (extension(filename) === '.html') {
      const files = fs.readFileSync(filename, 'ascii').toString().split('\n')

      // go through the list of code lines
      files.forEach((file) => {

        // if the current line matches `/(?:href|src)="(node_modules.*.[css|js])"/`, it will be stored in the variable lines
        const nodeModules = file.match(/(?:href|src)="(node_modules.*.[css|js])"/)
        if (nodeModules) {
          let vendor = []
          const src = nodeModules[1]
          const name = vendorName(src)
          let type
          let absolute

          vendor['name'] = name
          vendor['filetype'] = extension(src).replace('.', '')
          vendor['src'] = src
          vendor['absolute'] = resolve(src)

          if (vendors.findIndex(vendor => vendor.absolute === resolve(src)) === -1) {
            vendors.push(vendor)

            // Check it CSS file has assets
            if (extension(src) === '.css') {
              const assets = fs.readFileSync(resolve(src), 'ascii').toString().match(/(?:url)\((.*?)\)/ig)
              if (assets) {
                assets.forEach((asset) => {
                  const assetPath = asset.match(/(?:url)\((.*?)\)/)[1]
                  let subVendor = []
                  if (assetPath !== undefined) {
                    // console.log(assetPath)
                    const path = assetPath.replace(/\?.*/, '').replace(/\'|\"/, '')
                    subVendor['name'] = name
                    subVendor['filetype'] = 'other'
                    subVendor['src'] = normalize(`css/${path}`)
                    subVendor['absolute'] = resolve(dirname(src), path)

                    vendors.push(subVendor)
                  }
                })
              }
            }
          }
        }
      })
    }
  })
  return vendors
}

const copyFiles = (files, dest) => {
  files.forEach((file) => {
    let dir
    file.filetype !== 'other' ? dir = resolve(dest, file.name, file.filetype) : dir = resolve(dest, file.name, dirname(file.src))
    mkdirp.sync(dir)
    fs.createReadStream(file.absolute).pipe(fs.createWriteStream(resolve(dir, basename(file.src))))

    if (fs.existsSync(`${file.absolute}.map`)) {
      fs.createReadStream(`${file.absolute}.map`).pipe(fs.createWriteStream(resolve(dir, `${basename(file.src)}.map`)))
    }
  })
}

const replaceRecursively = (filename, vendor) => {
  const original = vendor.src
  const replacement = `vendors/${vendor.name}/${vendor.filetype}/${basename(vendor.src)}`
  sh.sed('-i', original, replacement, filename)
}

const main = () => {
  const vendors = findVendors()
  copyFiles(vendors.map((file) => { return file }), './dist/vendors/')
  const filenames = walkSync(dest)
  filenames.forEach((filename) => {
    if (extension(filename) === '.html') {
      vendors.map((vendor) => {
        if (vendor.filetype !== 'other') {
          replaceRecursively(resolve(filename), vendor)
        }
      })
    }
  })
}

main()
