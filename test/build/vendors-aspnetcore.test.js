const should = require('should');
const vendors = require('../../build/vendors-aspnetcore');
const testData = require('./vendors-aspnetcore.testdata');
const fs = require('fs');

describe('getVendorReferences', () => {
  it('Should return an empty list when references don\'t exist', () => {
    vendors.getVendorReferences('').should.be.eql([]);
  });

  it('Should return vendor reference list when references exist', () => {
    vendors.getVendorReferences(testData.originalDocument).should.be.eql(testData.vendorReferenceList);
  });
});

describe('getDistributionFolder', () => {
  let dataSet = [
    { input: '"node_modules/jquery/dist/jquery.min.js"', expected: '"~/lib/jquery/dist/jquery.min.js"' },
    { input: '\'NODE_MODULES/jquery/dist/jquery.min.js\'', expected: '"~/lib/jquery/dist/jquery.min.js"' },
    { input: '"css/style.css"', expected: '"~/css/style.css"' },
    { input: '"js/charts.js"', expected: '"~/js/charts.js"' },
    { input: '"img/avatars/7.jpg"', expected: '"~/images/avatars/7.jpg"' },
  ];

  dataSet.forEach(data => {
    it(`Should replace ${data.input} with ${data.expected}`, () => {
      let result = vendors.getDistributionFolder(data.input);
      result.should.be.equal(data.expected);
    });
  });

});

describe('getDistributionDocument', () => {
  it('Should change node_modules references to distribution root', () => {
    let result = vendors.getDistributionDocument(testData.originalDocument);
    result.should.be.equal(testData.distributionDocument);
  });
});

describe('copyVendorFiles scenario', () => {
  let sourceFolder = 'test-fs/source/';
  let destFolder = `test-fs/dest/`;

  let destFiles = testData.vendorFiles.map(file => file.replace(vendors.vendorFolder, vendors.libFolder));

  it('Given that source files exist', () => {
    testData.vendorFiles.forEach(file => {
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

  it('copyVendorFiles should copy all files and create the folder tree', () => {
    vendors.copyVendorFiles(sourceFolder, testData.vendorFiles, destFolder);

    let destFiles = testData.vendorFiles.map(file => file.replace(vendors.vendorFolder, vendors.libFolder));

    destFiles.forEach(file => {
      let filename = (`${destFolder}${file}`);
      fs.existsSync(filename).should.be.true(`No existe ${filename}!`);
    });
  });
});
