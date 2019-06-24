#!/usr/bin/env node

'use strict'

const autoprefixer = require('autoprefixer')
const chalk = require('chalk')
const fs = require('fs')
const glob = require('glob')
const mkdirp = require('mkdirp')
const path = require('path')
const postcss = require('postcss')
const sass = require('node-sass')

const { dirname, resolve } = path

const vendors = () => {
  const cwd = 'src/scss/vendors/'
  const pattern = '**/*.scss'
  const ignore = '**/_*.scss'
  const options = {
    cwd,
    ignore
  }
  const filenames = new glob.sync(pattern, options)
  return filenames.map(filename => {
    const obj = {}
    obj.dir = filename.split('/')[0]
    obj.path = resolve(cwd, filename)
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
  } catch (error) {
    // catch error, the process crashed
    const errorMessage = `
      file: ${error.file},
      line: ${error.line},
      column: ${error.column},
      message: ${error.message},
      formatted: ${error.formatted}
    `
    console.log(chalk.red(errorMessage))
    return
  }

  if (compiled && compiled.css) {
    console.log(chalk.green('Rendering Complete, saving .css file...'))
    console.log(chalk.green(`Wrote CSS to ${options.dest}`))
    console.log(chalk.green(`Wrote Source Map to ${options.map}`))
    console.log('\n')

    // add prefixes
    const prefixed = postcss([ autoprefixer ]).process(compiled.css, {
      from: options.src,
      to: options.dest
    })
    prefixed.then(result => {
      result.warnings().forEach(warning => {
        console.warn(warning.toString())
      })
      // write the result to file
      mkdirp(dirname(options.dest), err => {
        if (err) {
          throw err
        }

        // create .css file
        fs.writeFile(options.dest, result.css, err => {
          if (err) {
            throw err
          }
        })
        // create .css.map file
        fs.writeFile(options.map, compiled.map, err => {
          if (err) {
            throw err
          }
        })
        console.log(' ' + options.dest + ' built.')
      })
    })
  }
}

const compile = vendors => {
  vendors.forEach(vendor => {
    const dest = resolve(__dirname, '..', 'dist/vendors', vendor.dir, 'css', path.parse(vendor.path).name)
    // Expanded
    compileSass({
      src: vendor.path,
      dest: dest + '.css',
      map: dest + '.css.map'
    })

    // Minified
    compileSass({
      src: vendor.path,
      dest: dest + '.min.css',
      map: dest + '.min.css.map',
      style: 'compressed'
    })
  })
}

const main = () => {
  compile(vendors())
}

main()
