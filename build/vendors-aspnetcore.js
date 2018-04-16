#!/usr/bin/env node

'use strict'

const distributionPrefix = '~/';
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

const getDistributionDocument = (document) => {
  let vendorReferences = getVendorReferences(document);

  const replaceReference = (match) => {
    let sourceReference = match.substr(1, match.length - 2);
    let destReference = sourceReference.replace(/node_modules/i, distributionRoot);

    return `"${distributionPrefix}${destReference}"`;
  };

  let preparedDocument = document.replace(regEx, replaceReference)

  return {
    distributionDocument: preparedDocument,
    sourceReferences: vendorReferences
  };
};

module.exports = {
  getVendorReferences,
  getDistributionDocument
}
