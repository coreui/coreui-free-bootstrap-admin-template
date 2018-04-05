#!/usr/bin/env node

'use strict'

const fs         = require('fs');
const path       = require('path');
const mkdirp     = require('mkdirp');
const sh         = require('shelljs')

const basename   = path.basename;
const dirname    = path.dirname;
const resolve    = path.resolve;
const normalize  = path.normalize;
const join       = path.join;
const relative   = path.relative;
const extension  = path.extname;

const src        = 'src/';
const dest       = 'dist/';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
}

const findVendors = () => {
  const vendors = { css: [], js: [], other: [] };
  const filenames = walkSync(src)

  filenames.forEach((filename) => {
    if (extension(filename) === '.html') {
      const files = fs.readFileSync(filename, 'ascii').toString().split('\n');

      // go through the list of logFileLines
      files.forEach((file) => {

        // if the current line matches SAVE, it will be stored in the variable lines
        if(file.match(/node_modules/)) {

          const js = file.match(/node_modules.*.js/)
          if (js !== null) {
            // vendors.js.indexOf(resolve(js[0])) === -1 ? vendors.js.push({'html':js[0],'absolute':resolve(js[0])  }) : '';
            vendors.js.map((item) => { return item.html }).indexOf(js[0]) === -1 ? vendors.js.push({'html':js[0],'absolute':resolve(js[0])  }) : '';
          }
          const css = file.match(/node_modules.*.css/)
          if (css !== null) {
            if (vendors.css.map((item) => { return item.html }).indexOf(css[0]) === -1) {
              // vendors.css.push(resolve(css[0]))
              vendors.css.push({'html':css[0],'absolute':resolve(css[0])  })

              const assets = fs.readFileSync(css[0], 'ascii').toString().match(/url\(.*?\)/ig);
              assets.forEach(function(asset) {
                const assetPath = asset.replace(/\?.*/g, '').replace('url(','').replace(/\'/g, '').replace(')','');
                vendors.other.push({'absolute' : resolve(dirname(css[0]), assetPath), 'relative' : assetPath })
              })
            }
          }
        }
      })
    }
  })
  return vendors;
}

const copyFiles = (files, dest) => {
  files.forEach((file) => {
    mkdirp.sync(resolve(dest));
    fs.createReadStream(file).pipe(fs.createWriteStream(resolve(dest, basename(file))));
  })
}

const copyOtherFiles = (files, dest) => {
  files.forEach((file) => {
    mkdirp.sync(resolve(dest + dirname(file.relative)));
    fs.createReadStream(file.absolute).pipe(fs.createWriteStream(resolve(dest, file.relative)));
  })
}

const replaceRecursively = (filename, original) => {
  const replacement = 'vendors/' + extension(original).replace('.','') + '/' + basename(original);
  sh.sed('-i', original, replacement, filename)
}

const main = () => {

  const vendors = findVendors()

  copyFiles(vendors.css.map((item) => { return item.absolute }), './dist/vendors/css/');
  copyFiles(vendors.js.map((item) => { return item.absolute }), './dist/vendors/js/');
  copyOtherFiles(vendors.other, './dist/vendors/css/');

  const filenames = walkSync(dest)
  filenames.forEach((filename) => {
    if (extension(filename) === '.html') {
      vendors.css.map((item) => {
        replaceRecursively(resolve(filename), item.html)
      })
      vendors.js.map((item) => {
        replaceRecursively(resolve(filename), item.html)
      })
    }
  })
}

main()
