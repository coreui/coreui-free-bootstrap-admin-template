// /*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {
};

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return /\.spec\.js$/.test(path);
}

function isBuiltFile(path) {
  var builtPath = '/base/app/';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

System.config({
  baseURL: '/base',
  packageWithIndex: true // sadly, we can't use umd packages (yet?)
});

System.import('systemjs.config.js')
  .then(() => Promise.all([
      System.import('@angular/core/testing'),
      System.import('@angular/platform-browser-dynamic/testing')
    ]))
  .then((providers) => {
    var coreTesting = providers[0];
    var browserTesting = providers[1];
    coreTesting.TestBed.initTestEnvironment(
            browserTesting.BrowserDynamicTestingModule,
            browserTesting.platformBrowserDynamicTesting());

  })
  .then(function () {
  // Finally, load all spec files.
  // This will run the tests directly.
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      return System.import(moduleName);
    }));
  })
  .then(__karma__.start, __karma__.error);
