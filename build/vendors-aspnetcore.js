#!/usr/bin/env node

'use strict'

const distPrefix = '~/';
const sourceFolders = 'node_modules|css|img|js';
const distFolders = 'lib|css|images|js';
const vendorRoot = 'lib';

let originFolders = sourceFolders.split('|');
let destFolders = distFolders.split('|');

// from https://stackoverflow.com/questions/171480/regex-grabbing-values-between-quotation-marks
// Matches node_modules only, to get list of files to copy from node_modules to distibution folder
const vendorRegEx = /(["'])node_modules\/.*?\1/ig;

// Matches all source folders
const folderRegEx = new RegExp(`(["'])(${sourceFolders})/.*?\\1`, 'ig');

const getVendorReferences = (htmlText) => {
  if (htmlText.search(vendorRegEx) === -1) {
    return [];
  }

  let match;
  let references = [];

  while ((match = vendorRegEx.exec(htmlText)) !== null) {
    references.push(match[0].substr(1, match[0].length - 2));
  }

  return references;
};

const replaceReference = (match) => {
  let sourceReference = match.substr(1, match.length - 2);
  let sourceFolder = sourceReference.split('/')[0].toLowerCase();

  let index = originFolders.indexOf(sourceFolder);
  let destFolder = index === -1 ? sourceFolder : destFolders[index];

  let destReference = sourceReference.replace(new RegExp(`${sourceFolder}`, 'i') , destFolder);

  return `"${distPrefix}${destReference}"`;
};

const getDistributionDocument = (htmlText) => {
  return htmlText.replace(folderRegEx, replaceReference)
};

module.exports = {
  getVendorReferences,
  getDistributionDocument,
  replaceReference
}
