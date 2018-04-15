#!/usr/bin/env node

'use strict'

const distributionRoot = 'lib';

// from https://stackoverflow.com/questions/171480/regex-grabbing-values-between-quotation-marks
const regEx = /(["'])node_modules.*?\1/ig;

const getVendorReferences = (stringData) => {
  if (stringData.search(regEx) === -1) {
    return [];
  }

  let match;
  let references = [];

  while ((match = regEx.exec(stringData)) !== null) {
    references.push(match[0].substr(1, match[0].length - 2));
  }

  return references;
};

const getDistributionReferences = (vendorReferences) => {
  let distReferences = [];

  vendorReferences.forEach(reference => {
    distReferences.push(reference.replace(/node_modules/i, distributionRoot));
  });

  return distReferences;
};

const getDistributionDocument = (document) => {
  let vendorReferences = getVendorReferences(document);
  let distributionReferences = getDistributionReferences(vendorReferences);

  const replaceReference = (match) => {
    let search = match.substr(1, match.length - 2);
    let index = vendorReferences.indexOf(search);

    return index === -1 ? match : `"~/${distributionReferences[index]}"`;
  };

  let preparedDocument = document.replace(regEx, replaceReference)

  return {
    distributionDocument: preparedDocument,
    sourceReferences: vendorReferences,
    destinationReferences: distributionReferences
  };
};

module.exports = {
  getVendorReferences,
  getDistributionReferences,
  getDistributionDocument
}
