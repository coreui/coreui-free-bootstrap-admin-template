#!/usr/bin/env node

'use strict'

// const args = process.argv.slice(2)

const fs         = require('fs')
const path       = require('path')
const mkdirp     = require('mkdirp')
const pug        = require('pug')
// const src        = './pug/'
const dest       = './src/'
// const views      = src + 'views/'
// const pages      = src + 'pages/'
const pkg        = require(path.resolve(__dirname, '../package.json'))
const beautify   = require('js-beautify').html
const jsbOptions = {
  indent_size: 2,
  indent_inner_html: true,
  unformatted: [''],
  content_unformatted: ['textarea'],
  extra_liners: ['']
}

const basename   = path.basename
const dirname    = path.dirname
const resolve    = path.resolve
const normalize  = path.normalize
const join       = path.join
const relative   = path.relative
const extension  = path.extname

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file))
  })
  return filelist
}

const isPug = (filename) => {
  return extension(filename) === '.pug' ? true : false
}

const compile = (filename, basedir) => {
  const levels = filename.replace('pug/views/', '').replace('pug/pages/', '').split('/').length
  const base = (levels) => {
    let path = './'

    while (levels > 1) {
      levels = levels - 1;
      path = path + '../'
    }
    return path
  }
  // console.log()
  const fn = pug.compileFile(filename, {
    basedir: basedir,
    pretty: true,
  })
  const html = fn({
    base: base(levels)
  });
  return html
}

// Build base version
const buildBaseVersion = () => {

  // Build views
  const views = walkSync('./pug/views/')
  views.forEach((view) => {
    if (isPug(view)) {
      const html = compile(view, './pug/layout/')
      const file = view.replace('pug/views/', '').replace('.pug', '.html')

      // Create tree
      mkdirp.sync(resolve(dest, dirname(file)))
      // Create HTML file
      fs.writeFile(resolve(dest, file), beautify(html, jsbOptions), function(err) {
        if(err) {
          return console.log(err)
        }
        console.log(file + " file was saved!")
      })
    }
  })

  // Build pages
  const pages = walkSync('./pug/pages')
  pages.forEach((page) => {
    if (isPug(page)) {
      const html = compile(page, './pug/layout/')
      const file = page.replace('pug/pages/', '').replace('.pug', '.html')

      // Create tree
      mkdirp.sync(resolve(dest, dirname(file)))
      // Create HTML file
      fs.writeFile(resolve(dest, file), beautify(html, jsbOptions), function(err) {
        if(err) {
          return console.log(err)
        }
        console.log(file + " file was saved!")
      })
    }
  })
}

buildBaseVersion()
