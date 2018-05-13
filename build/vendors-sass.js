#!/usr/bin/env node

'use strict'

const autoprefixer = require('autoprefixer');
const chalk        = require('chalk')
const fs           = require('fs')
const glob         = require('glob')
const mkdirp       = require('mkdirp')
const path         = require('path')
const postcss      = require('postcss');
const sass         = require('node-sass')
const sh           = require('shelljs')

const basename   = path.basename
const dirname    = path.dirname
const resolve    = path.resolve
const normalize  = path.normalize
const join       = path.join
const relative   = path.relative
const extension  = path.extname

const vendors = () => {
  const cwd = 'src/scss/vendors/'
  const pattern = '**/*.scss'
  const ignore = '**/_*.scss'
  const options = {
    cwd: cwd,
    ignore: ignore
  }
  const filenames = new glob.sync(pattern, options)
  return filenames.map((filename) => {
    const obj = {}
    obj['dir'] = filename.split('/')[0]
    obj['path'] = resolve(cwd, filename)
    return obj
  })
}

const compileSass = (options = {}) => {
  // set default options
  options = Object.assign({
    style: 'expanded'
  }, options);

  // render the result
  let compiled
  try {
    compiled = sass.renderSync({
      file: options.src,
      outFile: options.dest,
      outputStyle: options.style,
      precision: 6,
      sourceMap: true,
      sourceMapContents: true
    })
  } catch(e) {
    // catch error, the process crashed
    const error = `
      file: ${e.file},
      line: ${e.line},
      column: ${e.column},
      message: ${e.message},
      formatted: ${e.formatted}
    `
    console.log(chalk.red(error))
    return
  }

  if (compiled && compiled.css){
    console.log(chalk.green('Rendering Complete, saving .css file...'))
    console.log(chalk.green(`Wrote CSS to ${options.dest}`))
    console.log(chalk.green(`Wrote Source Map to ${options.map}`))
    console.log(`\n`)

    // add prefixes
    const prefixed = postcss([ autoprefixer ]).process(compiled.css, {
      from: options.src,
      to: options.dest
    })
    prefixed.then((result) => {
      result.warnings().forEach((warning) => {
        console.warn(warning.toString())
      })
      // write the result to file
      mkdirp(dirname(options.dest), (error) => {
        if (error) return cb(error)
        // create .css file
        fs.writeFile(options.dest,result.css, (error) => {
          if (error) return cb(error)
        })
        // create .css.map file
        fs.writeFile(options.map,compiled.map, (error) => {
          if (error) return cb(error)
        })
        console.log(' ' + options.dest + ' built.');
      })
    })
  }
}

const compile = (vendors) => {
  vendors.forEach((vendor) => {
    const dest = resolve(__dirname, '..', 'src/vendors', vendor.dir, 'css', path.parse(vendor.path).name)
    // Expanded
    compileSass({
      src : vendor.path,
      dest: dest + '.css',
      map: dest + '.css.map'
    });

    // Minified
    compileSass({
      src : vendor.path,
      dest: dest + '.min.css',
      map: dest + '.min.css.map',
      style: 'compressed'
    });
  })
}

const main = () => {
  compile(vendors())
}

main()
