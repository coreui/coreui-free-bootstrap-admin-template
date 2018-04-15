#!/usr/bin/env node

'use strict'

const getVendorReferences = (stringData) => {
  // from https://stackoverflow.com/questions/171480/regex-grabbing-values-between-quotation-marks
  const regEx = /(["'])node_modules(?:(?=(\\?))\2.)*?\1/ig;

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

module.exports = {
  getVendorReferences
}
