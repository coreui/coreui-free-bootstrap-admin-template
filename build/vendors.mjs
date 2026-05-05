#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { globbySync } from 'globby'
import { formatHtml } from './format-html.mjs'

const DIST = 'dist'

const getPackageName = url => {
  const parts = url.split('/')
  return url.includes('@') ? `${parts[1]}/${parts[2]}` : parts[1]
}

const getNewUrl = url => {
  const ext = path.extname(url.replace('.map', '')).slice(1).replace(/#.*/, '')
  return `vendors/${getPackageName(url)}/${ext}/${path.basename(url)}`
}

const copyFile = (src, dest) => {
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest)
  }
}

const processCssAssets = (cssUrl, newCssUrl) => {
  const content = fs.readFileSync(cssUrl, 'utf8')
  for (const match of content.matchAll(/url\((['"]?)(.*?)\1\)/g)) {
    const assetPath = match[2]
    if (
      assetPath.startsWith('http://') ||
      assetPath.startsWith('https://') ||
      assetPath.startsWith('data:')
    ) {
      continue
    }

    const cleanPath = assetPath.replace(/[?#].*/, '')
    if (!path.basename(cleanPath).includes('.')) {
      continue
    }

    try {
      copyFile(
        path.resolve(path.dirname(cssUrl), cleanPath),
        path.resolve(DIST, path.dirname(newCssUrl), cleanPath)
      )
    } catch {
      // asset may not exist
    }
  }
}

const processHtmlFile = async file => {
  let html = fs.readFileSync(file, 'utf8')
  const seen = new Set()

  for (const [fullMatch, oldUrl] of html.matchAll(/(?:href|src|xlink:href)="(node_modules\/[^"]+)"/g)) {
    if (seen.has(oldUrl)) {
      continue
    }

    seen.add(oldUrl)

    const newUrl = getNewUrl(oldUrl)
    const cleanOld = oldUrl.replace(/#.*/, '')
    const cleanNew = path.join(DIST, newUrl.replace(/#.*/, ''))

    copyFile(cleanOld, cleanNew)

    if (fs.existsSync(`${cleanOld}.map`)) {
      copyFile(`${cleanOld}.map`, `${cleanNew}.map`)
    }

    if (path.extname(cleanOld) === '.css') {
      processCssAssets(cleanOld, newUrl.replace(/#.*/, ''))
    }

    html = html.replaceAll(fullMatch, fullMatch.replace(oldUrl, newUrl))
  }

  fs.writeFileSync(file, await formatHtml(html))
}

await Promise.all(globbySync(`${DIST}/**/*.html`).map(file => processHtmlFile(file)))
