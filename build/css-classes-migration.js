#!/usr/bin/env node
'use strict'

/* global Set */

const fs        = require('fs')
const path      = require('path')
const extension = path.extname
const { join }  = require('path')
const sh        = require('shelljs')
// sh.config.fatal = true
const sed       = sh.sed
const classesWithPrefix = fs.readFileSync('node_modules/@coreui/coreui/migration/css_prefix_migration.json')
const newCSSClasses = fs.readFileSync('node_modules/@coreui/coreui/migration/css_new_classes.json')

// Blame TC39... https://github.com/benjamingr/RegExp.escape/issues/37
RegExp.quote = (string) => string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')
RegExp.quoteReplacement = (string) => string.replace(/[$]/g, '$$')

const getFiles = (directory, allFiles = []) => {
  const files = fs.readdirSync(directory).map(file => join(directory, file))
  allFiles.push(...files)
  files.forEach((file) => {
    fs.statSync(file).isDirectory() && getFiles(file, allFiles)
  })
  return allFiles
}

const findCSSClasses = (filepath, classes) => {
  const file = fs.readFileSync(filepath, 'utf8')
  let cssClasses
  let elementsToReplace = {}

  if (path.extname(filepath) === '.pug') {
    const pugRegex = /(\.([a-zA-Z_-]{1}[\w-_]+))/g
    cssClasses = file.match(pugRegex)
    if (Array.isArray(cssClasses)) {
      cssClasses = cssClasses.map(cssClass => {
        let newValue = classes.find(el => el.old === `${cssClass}`)
        if (newValue) {
          newValue = newValue.new
        } else {
          newValue = cssClass
        }
        elementsToReplace = {
          original: cssClass,
          replacement: newValue
        }
        return elementsToReplace
      })
      cssClasses = cssClasses.filter(cssClass => cssClass.original !== cssClass.replacement)
    }
  } else {
    const htmlRegex = new RegExp(`(?:class)=['|"]([^'|"]*).`,'g')
    const classTags = file.match(htmlRegex)
    if (Array.isArray(classTags)) {
      cssClasses = classTags.map(classTag => {
        const newClassTag = classTag.replace(htmlRegex, '$1').split(' ').map(cssClass => {
          let newValue = classes.find(el => el.old === `.${cssClass}`)
          if (newValue) {
            newValue = newValue.new.replace('.','')
          } else {
            newValue = cssClass
          }
          return newValue
        })
        elementsToReplace = {
          original: classTag,
          replacement: classTag.replace(classTag.replace(htmlRegex, '$1'), newClassTag.join(' '))
        }
        return elementsToReplace
      })
      cssClasses = cssClasses.filter(cssClass => cssClass.original !== cssClass.replacement)
    }
  }

  return Array.isArray(cssClasses) ? [...new Set(cssClasses.sort())] : cssClasses
}

function getUnique(arr, comp) {

  const unique = arr.map(e => e[comp]).map((e, i, final) => final.indexOf(e) === i && i).filter(e => arr[e]).map(e => arr[e])
  return unique;
}

function findDataAttributes(filepath, allowedDataAttributes, classes) {
  const file = fs.readFileSync(filepath, 'utf8')
  let dataAttributes

  const regex = new RegExp(`(?:${allowedDataAttributes.join('|')})=['|"]([^'|"]*)`,'g')

  dataAttributes = file.match(regex)
  if (Array.isArray(dataAttributes)) {
    dataAttributes = dataAttributes.map(element => {
      const value = element.replace(regex, '$1')
      let newValue = classes.find(el => el.old === `.${value}`)
      let object = {}
      if (newValue) {
        newValue = newValue.new.replace('.','')
        object = {
          original: element,
          replacement: element.replace(value, newValue)
        }
      } else {
        object = {
          original: element,
          replacement: element
        }
      }
      return object
    })
    dataAttributes = getUnique(dataAttributes, 'original')
  }
  return Array.isArray(dataAttributes) ? [...new Set(dataAttributes.sort())] : dataAttributes
}

function main(args) {
  const directory = args[0]
  const newClasses = Object.assign(JSON.parse(classesWithPrefix).replace, JSON.parse(newCSSClasses).replace)
  // const EXCLUDED_DIRS = new Set([
  //   '.git',
  //   'node_modules',
  //   'vendor'
  // ])
  const INCLUDED_EXTENSIONS = new Set([
    // This extension whitelist is how we avoid modifying binary files
    '.html',
    '.pug'
  ])
  const DATA_ATTRIBUTES = [
    'data-toggle',
    'data-dismiss'
  ]

  const files = getFiles(directory)
  files.forEach((file) => {
    if (!fs.statSync(file).isDirectory()) {
      const classes = findCSSClasses(file, newClasses)
      console.log(classes)
      if (Array.isArray(classes)) {
        classes.forEach(cl => {
          const original = new RegExp(RegExp.quote(cl.original), 'g')
          const replacement = RegExp.quoteReplacement(cl.replacement)
          sed('-i', original, replacement, file)
        })
      }
      const dataAttributes = findDataAttributes(file, DATA_ATTRIBUTES, newClasses)
      if (Array.isArray(dataAttributes)) {
        console.log(dataAttributes)
        dataAttributes.forEach(dataAttribute => {
          const original = new RegExp(RegExp.quote(dataAttribute.original), 'g')
          const replacement = RegExp.quoteReplacement(dataAttribute.replacement)
          sed('-i', original, replacement, file)
        })
      }
    }
  })
}

main(process.argv.slice(2))
