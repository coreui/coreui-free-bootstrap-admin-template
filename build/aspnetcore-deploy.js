#!/usr/bin/env node

/*
* Main function for build-aspnetcore script
*
* Creates a set of distribution files arranged as per the ASP.NET Core way
*
* - Scans all html files for references to node_module files to copy those to a "lib" folder,
*   keeping the original folder structure from node_modules, to avoid possible conflicts
*   between vendors
*
* - Scans the referenced node_modules css files for references to other assets,
*   to include them in the "lib" folder as well
*
* - Changes "img" folder to "images" folder
*
* - Saves the files as Razor views (with a .cshtml extension) and adds "~/" to all references
*
* - The final result are two sets of files:
*   * html files similar to the regular CoreUI files in dist, to verify everything is working
*   * cshtml files, just like the html, but with ~/ in all references
*/

'use strict'

const fs = require('fs');
const path = require('path');
const lib = require('./aspnetcore-lib');

const src = 'src/';
const dest = 'dist/';

const main = () => {
  let siteFiles = lib.getFolderTreeFiles(src);
  lib.copySiteFiles(src, siteFiles, dest);
  lib.generateRazorViews(dest);
  lib.generateDistHtmlFiles(dest);

  let htmlFiles = lib.getFolderTreeFiles(src, '.html');
  let vendorFiles = lib.getAllVendorReferences(htmlFiles);
  lib.copyVendorFiles('', vendorFiles, dest);
};

main();

