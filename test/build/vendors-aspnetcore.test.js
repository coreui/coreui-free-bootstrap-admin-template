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

describe('getDistributionDocument', () => {
  it('Should change node_modules references to distribution root', () => {
    let result = vendors.getDistributionDocument(testData.originalDocument);

    result.should.be.equal(testData.distributionDocument);
  });
});
