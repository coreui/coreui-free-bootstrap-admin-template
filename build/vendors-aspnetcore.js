#!/usr/bin/env node

'use strict'

const distPrefix = '~/';
const sourceFolderString = 'node_modules|css|img|js';
const distFolderString = 'lib|css|images|js';

const sourceFolders = sourceFolderString.split('|');
const distFolders = distFolderString.split('|');

const vendorFolder = sourceFolders[0];
const libFolder = distFolders[0];

// from https://stackoverflow.com/questions/171480/regex-grabbing-values-between-quotation-marks
// Matches node_modules only, to get list of files to copy from node_modules to distibution folder
const vendorRegEx = /(["'])node_modules\/.*?\1/ig;

// Matches all source folders
const folderRegEx = new RegExp(`(["'])(${sourceFolderString})/.*?\\1`, 'ig');

const getVendorReferences = (html) => {
  if (html.search(vendorRegEx) === -1) {
    return [];
  }

  let match;
  let references = [];

  while ((match = vendorRegEx.exec(html)) !== null) {
    references.push(match[0].substr(1, match[0].length - 2));
  }

  return references;
};

// This has to be called for every match in the content
const getDistributionFolder = (match) => {
  let sourceReference = match.substr(1, match.length - 2);
  let sourceFolder = sourceReference.split('/')[0].toLowerCase();

  let index = sourceFolders.indexOf(sourceFolder);
  let destFolder = index === -1 ? sourceFolder : distFolders[index];

  let destReference = sourceReference.replace(new RegExp(`${sourceFolder}`, 'i') , destFolder);

  return `"${distPrefix}${destReference}"`;
};

const getDistributionDocument = (html) => {
  // The replaceRerefence function gets called for every match,
  // because the regEx is global (/g)
  return html.replace(folderRegEx, getDistributionFolder)
};

const copyVendorFiles = (fileList) => {

};

module.exports = {
  getVendorReferences,
  getDistributionDocument,
  getDistributionFolder,
  copyVendorFiles,
  vendorFolder,
  libFolder,
}
