#!/usr/bin/env node

'use strict'

const fs = require('fs');
const path = require('path');
const lib = require('./aspnetcore-lib');

const src = 'src/';
const dest = 'dist/';

const main = () => {
  let siteFiles = lib.walkSync(src);
  lib.copySiteFiles(src, siteFiles, dest);
  lib.generateRazorViews(dest);

  let htmlFiles = lib.walkSync(src, '.html');
  let vendorFiles = lib.getAllVendorReferences(htmlFiles);
  lib.copyVendorFiles('node_modules', vendorFiles, dest);
};

main();

