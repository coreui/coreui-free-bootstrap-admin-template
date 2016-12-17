exports.config = {
  baseUrl: 'http://localhost:19876/',

  // use `npm run e2e`
  specs: [
    'e2e/**/*.js'
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: true,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    process.env.BABEL_ENV = 'e2e';
    require('babel-register')();
  },

  plugins: [{
    package: 'aurelia-protractor-plugin'
  }]
};
