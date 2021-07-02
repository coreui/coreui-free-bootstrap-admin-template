#!/usr/bin/env node
'use strict'

const fs = require('fs').promises
const path = require('path')
const mkdirp = require('mkdirp')
const pug = require('pug')
const { basename, dirname, resolve, sep } = path

const globby = require('globby')

// These are the filetypes we only care about replacing the version
const GLOB = [
  '**/*.pug'
]

const SRC = 'src/pug/views/'

const GLOBBY_OPTIONS = {
  cwd: path.join(__dirname, '..', SRC)
}

const compile = (filename, basedir) => {
  const levels = basedir.split(`${sep}`).filter(el => el !== '').length
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

// Build html files
const compilePugToHtml = (file, dest) => {
  const dir = dirname(file)
  const filename = basename(file).replace('.pug', '.html')
  const relative = path.relative(path.join(__dirname, '..'), dir.replace(SRC, ''))
  const html = compile(path.join(__dirname, '..', SRC, file), `${relative}`)

  mkdirp(path.join(__dirname, '..', dest, relative)).then(() => {
    fs.writeFile(resolve(__dirname, '..', dest, relative, filename), html, err => {
      if (err) {
        throw err
      }

      console.log(`${resolve(__dirname, '..', dest, relative, filename)} file saved!`)
    })
  })
}

const args = require('minimist')(process.argv.slice(2))

async function main(args) {
  const { dest } = args

  if (!dest) {
    console.error('USAGE: change-version old_version new_version [--verbose] [--dry[-run]]')
    console.error('Got arguments:', args)
    process.exit(1)
  }

  try {
    const files = await globby(GLOB, GLOBBY_OPTIONS)

    await Promise.all(files.map(file => compilePugToHtml(file, dest)))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main(args)
