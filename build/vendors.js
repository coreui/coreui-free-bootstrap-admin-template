#!/usr/bin/env node

'use strict'

const fs = require('node:fs')
const path = require('node:path')
const injector = require('@coreui/vendors-injector')

const extension = path.extname
const dist = 'dist/'

const walkSync = (dir, filelist = []) => {
  for (const file of fs.readdirSync(dir)) {
    filelist = fs.statSync(path.join(dir, file)).isDirectory() ? walkSync(path.join(dir, file), filelist) : filelist.concat(path.join(dir, file))
  }

  return filelist
}

const main = () => {
  const filenames = walkSync(dist)
  for (const filename of filenames) {
    if (extension(filename) === '.html') {
      injector.toFile(filename)
    }
  }
}

main()
