/*
* Support functions for build-aspnetcore script
*/

'use strict'

const fs = require('fs');
const os = require('os');
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

// Matches all source folders, because of the "g" option
const folderRegEx = new RegExp(`(["'])(${sourceFolderString})/.*?\\1`, 'ig');

// Adapted from vendors.js walkSync
const getFolderTreeFiles = (dir, fileExt = '*', filelist = []) => {
  dir = dir.replace(/\\/g, '/');
  fs.readdirSync(dir).filter(f => fileExt === '*' ? true : path.extname(f) === fileExt).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? getFolderTreeFiles(path.join(dir, file), fileExt, filelist)
      : filelist.concat(path.posix.join(dir, file));
  });
  return filelist;
}

// Gets a unified unique list of vendor references (begining wih node_modules)
const getVendorReferences = (html) => {
  if (html.search(vendorRegEx) === -1) {
    return [];
  }

  let match;
  let references = [];

  while ((match = vendorRegEx.exec(html)) !== null) {
    references.push(match[0].substr(1, match[0].length - 2));
  }

  return references.sort();
};

// Replaces the match changing source folder for distribution folder
// This gets called for every match in the content
const getDistributionFolder = (match) => {
  let sourceReference = match.substr(1, match.length - 2);
  let sourceFolder = sourceReference.split('/')[0].toLowerCase();

  let index = sourceFolders.indexOf(sourceFolder);
  let destFolder = index === -1 ? sourceFolder : distFolders[index];

  let destReference = sourceReference.replace(new RegExp(`${sourceFolder}`, 'i') , destFolder);

  return `${destReference}`;
};

// Gets the content with all vendor references replaced for distribution references
const generateDistDocument = (html, type) => {

  // Adds the "~/" prefix when it's a cshtml file
  const getFolder = (match) => {
    let folder = getDistributionFolder(match);
    return type === 'cshtml' ? `"${distPrefix}${folder}"` : `"${folder}"`
  };

  const getLink = (match, p1, p2) => {
    const httpRegEx = /http[s]*:\/\//;
    if (httpRegEx.test(p2)) {
      return match;
    }
    return `${p1}asp-area="" asp-controller="CoreUI" asp-action="Index" asp-route-view="${p2}"`;
  };

  // Replace each match, because folderRegEx is "global" (/g)
  html = html.replace(folderRegEx, getFolder);

  // Specific changes for Razor views
  if (type === 'cshtml') {
    html = '@{ Layout = ""; }\r\n' + html;

    // Replace links with Razor link Tag Helper
    html = html.replace(/(<a.*)href="(.*)\.(.*?)"/g, getLink);

    // Escape @ character in version comment
    html = html.replace(/\* @(version|link) /g, '* @@$1 ');

    // Escape @ character in CoreUI reference
    html = html.replace(/(href|src)="~\/lib\/@coreui/g, '$1="~/lib/@@coreui');

    // Escape @ character in text content
    html = html.replace(/>@(.*?)</g, '>@@$1<');
  }

  return html;
};

// Copies the asset files referenced from the css with url(...)
const copyAssetFiles = (cssFile, destFolder) => {


  let assetFiles = getAssetFiles();

  console.log(assetFiles);
};

// gets the assets referenced from a css file
const getCssAssets = (css) => {
  // Matches the url up to the querystring if present
  let assetRegex = /url\((['"])*(.*?)(\1|\?.*?\1)\)/g;

  if (css.search(assetRegex) === -1) {
    return [];
  }

  let match;
  let assets = [];

  while ((match = assetRegex.exec(css)) !== null) {
    assets.push(match[2]);
  }

  return assets.sort().filter((a, i, arr) => !i || a !== arr[i - 1]);
};

// Copies the referenced files to the distribution folder
const copyVendorFiles = (sourceFolder, referenceList, destFolder) => {
  console.log(`    Current folder: ${process.cwd()}`);

  referenceList.forEach(file => {
    let sourceFile = path.join(sourceFolder, file);
    let libFile = file.replace(vendorFolder, libFolder);
    let destFile = path.join(destFolder, libFile);

    if (fs.existsSync(sourceFile)) {
      mkdirp.sync(path.dirname(destFile));
      fs.copyFileSync(sourceFile, destFile);

      let mapFile = `${sourceFile}.map`;
      if (fs.existsSync(mapFile)) {
        fs.copyFileSync(mapFile, `${destFile}.map`);
      }

      if (path.extname(sourceFile) === '.css') {
        let css = fs.readFileSync(sourceFile, 'utf8');
        let assetReferences = getCssAssets(css);

        assetReferences.forEach(reference => {
          let assetFile = path.resolve(path.dirname(sourceFile), reference);
          let destAssetFile = path.resolve(path.dirname(destFile), reference);

          if (fs.existsSync(assetFile)) {
            mkdirp.sync(path.dirname(destAssetFile));
            fs.copyFileSync(assetFile, destAssetFile);
          } else {
            console.log(` ** Missing asset file: ${assetFile}`);
          }

        });
      }
    } else {
      console.log(` ** Missing file: ${sourceFile}`);
    }
  });
};

// Generates the equivalent Razor view for the html file
const generateRazorView = (htmlFile) => {
  let html = fs.readFileSync(htmlFile, 'utf8');
  let cshtml = generateDistDocument(html, 'cshtml');
  let cshtmlFile = htmlFile.replace('.html', '.cshtml');

  fs.writeFileSync(cshtmlFile, cshtml);
};

// Generates Razor views for all html files in the folder tree
const generateRazorViews = (folder) => {
  let htmlFiles = getFolderTreeFiles(folder, '.html');

  htmlFiles.forEach(htmlFile => {
    generateRazorView(htmlFile);
  });
};

// Generates the distribution html file
const generateDistHtmlFile = (htmlFile) => {
  let html = fs.readFileSync(htmlFile, 'utf8');
  let cshtml = generateDistDocument(html, 'html');

  fs.writeFileSync(htmlFile, cshtml);
};

// Generates the distribution html for all html files in the folder tree
const generateHtmlFiles = (folder) => {
  let htmlFiles = getFolderTreeFiles(folder, '.html');

  htmlFiles.forEach(htmlFile => {
    generateDistHtmlFile(htmlFile);
  });
};

// Gets all vendors references (node_modules) from the html content
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

    fs.copyFileSync(file, destFile);
  });
};

module.exports = {
  getFolderTreeFiles,
  getVendorReferences,
  generateDistDocument,
  getDistributionFolder,
  copyVendorFiles,
  vendorFolder,
  libFolder,
  generateRazorViews,
  generateHtmlFiles,
  getAllVendorReferences,
  copySiteFiles,
  getCssAssets
}
