#!/usr/bin/env node

import fs from 'node:fs/promises'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { globby } from 'globby'
import pug from 'pug'
import { formatHtml } from './format-html.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const ROOT = path.join(__dirname, '..')
const GLOB = ['**/*.pug']
const SRC = 'src/pug/views/'
const GLOBBY_OPTIONS = {
  cwd: path.join(ROOT, SRC)
}

const { basename, dirname, resolve, sep } = path
const isRTL = process.env.BUILD_RTL === 'true'

const base = levels => `./${'../'.repeat(levels)}`

const readSvg = (src, alt = '', extraAttrs = {}) => {
  const searchPaths = [
    path.join(ROOT, src),
    path.join(ROOT, 'src', src),
    path.join(ROOT, 'src/assets', src)
  ]

  let content = null
  for (const filePath of searchPaths) {
    try {
      content = readFileSync(filePath, 'utf8')
      break
    } catch {
      // try next location
    }
  }

  if (!content) {
    console.warn(`[readSvg] File not found: ${src}`)
    return `<!-- SVG not found: ${src} -->`
  }

  const additions = [
    alt ? `role="img" aria-label="${alt}"` : '',
    ...Object.entries(extraAttrs).map(([key, val]) => `${key}="${val}"`)
  ].filter(Boolean).join(' ')

  return additions ? content.replace('<svg', `<svg ${additions}`) : content
}

const compile = (filename, basedir) => {
  const levels = basedir.split(`${sep}`).filter(el => el !== '').length

  return pug.compileFile(filename, {
    basedir: path.join(ROOT, 'src/pug'),
    pretty: true
  })({
    base: base(levels),
    dir: isRTL ? 'rtl' : undefined,
    readSvg
  })
}

const compilePugToHtml = async (file, dest) => {
  const dir = dirname(file)
  const filename = basename(file).replace('.pug', '.html')
  const relative = path.relative(ROOT, dir.replace(SRC, ''))
  const html = compile(path.join(ROOT, SRC, file), `${relative}`)

  const result = await formatHtml(html)

  await fs.mkdir(path.join(ROOT, dest, relative), { recursive: true })
  await fs.writeFile(resolve(ROOT, dest, relative, filename), result)
  console.log(`${resolve(ROOT, dest, relative, filename)} file saved!`)
}

async function main() {
  try {
    // Get destination from command line arguments or use default
    const args = process.argv.slice(2)
    const destArg = args.find(arg => arg.startsWith('--dest='))
    const dest = destArg ? destArg.split('=')[1] : 'src/views/'

    const files = await globby(GLOB, GLOBBY_OPTIONS)

    await Promise.all(files.map(file => compilePugToHtml(file, dest)))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
