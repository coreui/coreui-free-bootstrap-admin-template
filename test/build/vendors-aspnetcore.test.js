const should = require('should');
const vendors = require('../../build/vendors-aspnetcore');
const testData = require('./vendors-aspnetcore.testdata');

describe('getVendorReferences', () => {
  it('Should return an empty list when references don\'t exist', () => {
    vendors.getVendorReferences('').should.be.eql([]);
  });

  it('Should return vendor reference list when references exist', () => {
    vendors.getVendorReferences(testData.originalDocument).should.be.eql(testData.vendorReferenceList);
  });
});

describe('replaceReference', () => {
  let dataSet = [
    { input: '"node_modules/jquery/dist/jquery.min.js"', expected: '"~/lib/jquery/dist/jquery.min.js"' },
    { input: '\'NODE_MODULES/jquery/dist/jquery.min.js\'', expected: '"~/lib/jquery/dist/jquery.min.js"' },
    { input: '"css/style.css"', expected: '"~/css/style.css"' },
    { input: '"js/charts.js"', expected: '"~/js/charts.js"' },
    { input: '"img/avatars/7.jpg"', expected: '"~/images/avatars/7.jpg"' },
  ];

  dataSet.forEach(data => {
    it(`Should replace ${data.input} with ${data.expected}`, () => {
      let result = vendors.replaceReference(data.input);
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
