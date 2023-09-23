#!/usr/bin/env node

'use strict'

const fs = require('node:fs')
const path = require('node:path')
const injector = require('@coreui/vendors-injector')

const { extname, join } = path

const DIST = 'dist/'

const walkSync = (dir, filelist = []) => {
  for (const file of fs.readdirSync(dir)) {
    filelist = fs.statSync(join(dir, file)).isDirectory() ? walkSync(join(dir, file), filelist) : filelist.concat(join(dir, file))
  }

  return filelist
}

const main = () => {
  const filenames = walkSync(DIST)
  for (const filename of filenames) {
    if (extname(filename) === '.html') {
      injector.toFile(filename)
    }
  }
}

main()
