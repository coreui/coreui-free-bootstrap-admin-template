#!/usr/bin/env node

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

