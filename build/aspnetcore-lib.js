'use strict'

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const distPrefix = '~/';
const sourceFolderString = 'node_modules|vendors|css|img|js';
const distFolderString = 'lib|vendors|css|images|js';

const sourceFolders = sourceFolderString.split('|');
const distFolders = distFolderString.split('|');

const vendorFolder = sourceFolders[0]; // expecting "node_modules" to be the first
const libFolder = distFolders[0];

// from https://stackoverflow.com/questions/171480/regex-grabbing-values-between-quotation-marks
// Matches node_modules only, to get list of files to copy from node_modules to lib on distibution folder
const vendorRegEx = /(["'])node_modules\/.*?\1/ig;

// Matches all source folders
const folderRegEx = new RegExp(`(["'])(${sourceFolderString})/.*?\\1`, 'ig');

// Adapted from vendors.js
const walkSync = (dir, fileExt = '*', filelist = []) => {
  dir = dir.replace(/\\/g, '/');
  fs.readdirSync(dir).filter(f => fileExt === '*' ? true : path.extname(f) === fileExt).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), fileExt, filelist)
      : filelist.concat(path.posix.join(dir, file));
  });
  return filelist;
}

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

const copyVendorFiles = (sourceFolder, fileList, destFolder) => {
  fileList.forEach(file => {
    let sourceFile = path.join(sourceFolder, file);
    let libFile = file.replace(vendorFolder, libFolder);
    let destFile = path.join(destFolder, libFile);

    mkdirp.sync(path.dirname(destFile));
    fs.copyFileSync(sourceFile, destFile)
  });
};

const generateRazorView = (htmlFile) => {
  let html = fs.readFileSync(htmlFile, 'utf8');
  let cshtml = getDistributionDocument(html);
  let cshtmlFile = htmlFile.replace('.html', '.cshtml');

  fs.writeFileSync(cshtmlFile, cshtml);
};

const generateRazorViews = (folder) => {
  let htmlFiles = walkSync(folder, '.html');

  htmlFiles.forEach(htmlFile => {
    generateRazorView(htmlFile);
  });
};

const getAllVendorReferences = (htmlFiles) => {
  let vendorFiles = [];

  htmlFiles.forEach(htmlFile => {
    let html = fs.readFileSync(htmlFile, 'utf8');
    let htmlVendorFiles = getVendorReferences(html);
    vendorFiles = vendorFiles.concat(htmlVendorFiles);
  });

  // Unique values as per: https://stackoverflow.com/questions/4833651/javascript-array-sort-and-unique#answer-34191046
  return vendorFiles.sort().filter((vf, i, arr) => !i || vf !== arr[i - 1]);
};

// The file list contains the relative path, equal to sourceFolder
const copySiteFiles = (sourceFolder, fileList, destFolder) => {
  fileList.forEach(file => {
    // remove sourceFolder
    let baseFile = file.replace(sourceFolder, '');
    baseFile = baseFile[0] == '/' ? baseFile.substr(1) : baseFile;

    // get base folder
    let baseFolder = '';
    let distFolder = '';
    let baseIndex = baseFile.indexOf('/');

    if (baseIndex >= 0) {
      baseFolder = baseFile.substr(0, baseIndex);
      baseFile = baseFile.substr(baseIndex + 1);

      let index = sourceFolders.indexOf(baseFolder);
      distFolder = index === -1 ? baseFolder : distFolders[index];
    }

    let destFile = path.join(destFolder, distFolder, baseFile);

    mkdirp.sync(path.dirname(destFile));
    fs.copyFileSync(file, destFile)
  });
};

module.exports = {
  walkSync,
  getVendorReferences,
  getDistributionDocument,
  getDistributionFolder,
  copyVendorFiles,
  vendorFolder,
  libFolder,
  generateRazorViews,
  getAllVendorReferences,
  copySiteFiles
}
