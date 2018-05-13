/*
* Unit and integration tests for build-aspnetcore script
*/

const fs = require('fs');
const path = require('path');
const should = require('should');
const mkdirp = require('mkdirp');
const lib = require('../../build/aspnetcore-lib');
const testData = require('./aspnetcore-lib.testdata');

describe('getVendorReferences', () => {
  it('Should return an empty list when references don\'t exist', () => {
    lib.getVendorReferences('').should.be.deepEqual([]);
  });

  it('Should return vendor reference list when references exist', () => {
    lib.getVendorReferences(testData.originalDocument).should.be.deepEqual(testData.vendorReferenceList);
  });
});

describe('getDistributionFolder', () => {
  let dataSet = [
    { input: '"node_modules/jquery/dist/jquery.min.js"', expected: 'lib/jquery/dist/jquery.min.js' },
    { input: '\'NODE_MODULES/jquery/dist/jquery.min.js\'', expected: 'lib/jquery/dist/jquery.min.js' },
    { input: '"css/style.css"', expected: 'css/style.css' },
    { input: '"js/charts.js"', expected: 'js/charts.js' },
    { input: '"img/avatars/7.jpg"', expected: 'images/avatars/7.jpg' },
  ];

  dataSet.forEach(data => {
    it(`Should replace ${data.input} with ${data.expected}`, () => {
      let result = lib.getDistributionFolder(data.input, 'cshtml');
      result.should.be.equal(data.expected);
    });
  });

});

describe('generateDistDocument', () => {
  it('Should generate a functional html file changing folder references as configured, in distribution', () => {
    let result = lib.generateDistDocument(testData.originalDocument, 'html');
    result.should.be.equal(testData.htmlDocument);
  });
  it('Should generate a functional Razor view changing folder references as configured, in distribution', () => {
    let result = lib.generateDistDocument(testData.originalDocument, 'cshtml');
    result.should.be.equal(testData.cshtmlDocument);
  });
});

describe('getCssAssets', () => {
  it('Should get the assets referenced in the css', () => {
    let assets = lib.getCssAssets(testData.cssContent);

    assets.should.be.deepEqual(testData.cssAssets);
  });
});

describe('copyVendorFiles scenario', () => {
  let sourceFolder = 'test-fs/source/';
  let destFolder = `test-fs/dest/`;

  let destFiles = testData.vendorReferences.map(file => file.replace(lib.vendorFolder, lib.libFolder));

  it('Given that source files exist', () => {
    testData.vendorReferences.forEach(file => {
      let filename = (`${sourceFolder}${file}`);
      fs.existsSync(filename).should.be.true(`Missing file: ${filename}!`);
    });
  });

  it('And that destination files don\'t exist', () => {
    destFiles.forEach(file => {
      let filename = (`${destFolder}${file}`);
      fs.existsSync(filename).should.not.be.true(`Existing file: ${filename}!`);
    });
  });

  it('copyVendorFiles should copy all files in list and create the destination folder tree including the css assets', () => {
    lib.copyVendorFiles(sourceFolder, testData.vendorReferences, destFolder);

    let vendorFiles = lib.getFolderTreeFiles(`${destFolder}/${lib.libFolder}`);

    vendorFiles.should.be.deepEqual(testData.vendorFiles);
  });
});

describe('getFolderTreeFiles', () => {

  let sourceFiles = [
    'test-fs/source/src/css/style.css',
    'test-fs/source/src/img/avatars/4.jpg',
    'test-fs/source/src/img/avatars/7.jpg',
    'test-fs/source/src/js/main.js',
    'test-fs/source/src/test-blank.html',
    'test-fs/source/src/test-document.html',
  ];

  it('Should find all files in test-fs/source/src folder', () => {
    let files = lib.getFolderTreeFiles('test-fs/source/src');
    files.should.be.deepEqual(sourceFiles);
  });

  it('Should find all html files in test-fs/source/src folder', () => {
    let files = lib.getFolderTreeFiles('test-fs/source/src', '.html');
    files.should.be.deepEqual(sourceFiles.filter(file => file.endsWith('.html')));
  });
});

describe('generateRazorViews', () => {
  let htmlFiles = lib.getFolderTreeFiles('test-fs/source/src', '.html');

  lib.copySiteFiles('test-fs/source/src', htmlFiles, 'test-fs/dest');

  it('Should generate .cshtml files for all .html files in destination', () => {
    let folder = 'test-fs/dest/';
    expectedFiles = [
      'test-fs/dest/test-blank.cshtml',
      'test-fs/dest/test-document.cshtml',
    ];

    lib.generateRazorViews(folder);
    cshtmlFiles = lib.getFolderTreeFiles('test-fs/dest', '.cshtml');
    cshtmlFiles.should.be.deepEqual(expectedFiles);
  });
});

describe('getAllVendorFiles', () => {
  let folder = 'test-fs/source/src/';
  let htmlFiles = lib.getFolderTreeFiles(folder, '.html');
  let vendorFiles = lib.getAllVendorReferences(htmlFiles);

  let expectedVendorFiles = [
    'node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min.js',
    'node_modules/@coreui/coreui/dist/js/coreui.min.js',
    'node_modules/chart.js/dist/Chart.min.js',
    'node_modules/flag-icon-css/css/flag-icon.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/simple-line-icons/css/simple-line-icons.css',
  ];

  it('Should get the list of all referenced vendor files in the folder tree', () => {
    vendorFiles.should.be.deepEqual(expectedVendorFiles);
  });
});

describe('copySiteFiles', () => {
  let expectedFiles = [
    'test-fs/dest/css/style.css',
    'test-fs/dest/images/avatars/4.jpg',
    'test-fs/dest/images/avatars/7.jpg',
    'test-fs/dest/js/main.js',
    'test-fs/dest/test-blank.html',
    'test-fs/dest/test-document.html',
  ];

  it('Should copy source files from source folders to destination folders', () => {
    let sourceFileList = lib.getFolderTreeFiles('test-fs/source').filter(f => !f.startsWith('test-fs/source/node_modules/'))

    lib.copySiteFiles('test-fs/source/src', sourceFileList, 'test-fs/dest');

    let destFileList = lib.getFolderTreeFiles('test-fs/dest').filter(f => !f.startsWith('test-fs/dest/lib/') && !f.endsWith('.cshtml'));
    destFileList.should.be.deepEqual(expectedFiles);
  });
});
