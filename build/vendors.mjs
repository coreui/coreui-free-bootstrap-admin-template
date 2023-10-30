#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import injectVendors from '@coreui/vendors-injector'

const DIST = 'dist/'

const { extname, join } = path

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
      injectVendors.toFile(filename)
    }
  }
}

main()
