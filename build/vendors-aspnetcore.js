#!/usr/bin/env node

'use strict'

const distPrefix = '~/';
const sourceFolders = 'node_modules|css|img|js';
const distFolders = 'lib|css|images|js';
const vendorRoot = 'lib';

// from https://stackoverflow.com/questions/171480/regex-grabbing-values-between-quotation-marks
const vendorRegEx = /(["'])node_modules\/.*?\1/ig;
const folderRegEx = new RegExp(`(["'])(${sourceFolders})/.*?\\1`, 'i');

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

const getDistributionDocument = (htmlText) => {

  const replaceReference = (match) => {
    let sourceReference = match.substr(1, match.length - 2);
    let destReference = sourceReference.replace(/node_modules/i, vendorRoot);

    return `"${distPrefix}${destReference}"`;
  };

  return htmlText.replace(vendorRegEx, replaceReference)
};

module.exports = {
  getVendorReferences,
  getDistributionDocument
}
