#!/usr/bin/env node

'use strict'

// eslint-disable-next-line unicorn/prefer-node-protocol
const fs = require('fs')
// eslint-disable-next-line unicorn/prefer-node-protocol
const path = require('path')
const extension = path.extname
const injector = require('@coreui/vendors-injector')
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
