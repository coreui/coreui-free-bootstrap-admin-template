#!/usr/bin/env node
'use strict'

const glob = require('glob')
const path = require('path')
const inject = require('@coreui/svg-injector')
const { resolve } = path
const svgSelectors = 'img.c-icon, img.c-btn-icon, img.c-nav-icon'

// Get all html files
const views = () => {
  const cwd = 'dist/'
  const pattern = '**/*.html'
  const options = {
    cwd
  }
  const filenames = new glob.sync(pattern, options)
  return filenames.map(filename => {
    const obj = {}
    obj.dir = filename.split('/')[0]
    obj.path = resolve(cwd, filename)
    return obj
  })
}

const injectSVG = views => {
  views.forEach(view => {
    const file = resolve(__dirname, view.path)
    inject.toFile(file, svgSelectors, 'src/')
  })
}

const main = () => {
  injectSVG(views())
}

main()
