#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { globby } from 'globby'
import pug from 'pug'
import { mkdirp } from 'mkdirp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const GLOB = [
  '**/*.pug'
]

const SRC = 'src/pug/views/'

const GLOBBY_OPTIONS = {
  cwd: path.join(__dirname, '..', SRC)
}

const { basename, dirname, resolve, sep } = path

const base = levels => {
  let path = './'
  while (levels > 0) {
    levels -= 1
    path += '../'
  }

  return path
}

const compile = (filename, basedir) => {
  const levels = basedir.split(`${sep}`).filter(el => el !== '').length

  const fn = pug.compileFile(filename, {
    basedir: './pug/',
    pretty: true
  })
  const html = fn({
    base: base(levels)
  })
  return html
}

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

async function main() {
  try {
    const files = await globby(GLOB, GLOBBY_OPTIONS)

    await Promise.all(files.map(file => compilePugToHtml(file, 'src/views/')))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
