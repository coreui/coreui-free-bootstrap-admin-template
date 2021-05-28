#!/usr/bin/env node
'use strict'

const fs = require('fs')
const glob = require('glob')
const path = require('path')
const mkdirp = require('mkdirp')
const pug = require('pug')
const { basename, dirname, resolve, extname, sep } = path

const argv = require('minimist')(process.argv.slice(2), {
  // boolean: ['enablePrettier', 'injectVendors', 'injectSvg']
})
console.dir(argv)
const { src } = argv
const { dest } = argv

// Get all pug files
const getAllFiles = src => {
  // const cwd = 'pug/'
  const pattern = `${src}/**/*.pug`
  const options = {
    ignore: `${src}/_*/**`
  }
  return new glob.sync(pattern, options)
}

const isPug = filename => extname(filename) === '.pug'

const compile = (filename, basedir) => {
  const levels = basedir.split(`${sep}`).filter(el => el !== '' ).length
  const base = levels => {
    let path = './'
    while (levels > 0) {
      levels -= 1
      path += '../'
    }

    return path
  }

  const fn = pug.compileFile(filename, {
    basedir: './pug/',
    pretty: true
  })
  const html = fn({
    base: base(levels)
  })
  return html
}

const checkPath = (src, dest) => {
  // Check if path is file or directory
  if (fs.statSync(src).isDirectory()) {
    const files = getAllFiles(src)
    files.forEach(file => {
      if (isPug(file)) {
        compilePugToHtml(resolve(file), dest)
      }
      // TODO: handle errors
    })
  } else if (isPug(src)) {
    compilePugToHtml(resolve(src), dest)
  }
  // TODO: handle errors
}

// Build html files
const compilePugToHtml = (src, dest) => {
  const dir = dirname(src)
  const file = basename(src).replace('.pug', '.html')
  const relative = path.relative(resolve(__dirname, '..'), dir.replace(`src${sep}pug${sep}views`, ''))
  const html = compile(src, `${relative}`)
  mkdirp.sync(resolve(__dirname, '..', dest, relative))


  fs.writeFile(resolve(__dirname, '..', dest, relative, file), html, err => {
    if (err) {
      throw err
    }

    console.log(`${resolve(__dirname, '..', dest, relative, file)} file saved!`)
  })
}

checkPath(src, dest)
