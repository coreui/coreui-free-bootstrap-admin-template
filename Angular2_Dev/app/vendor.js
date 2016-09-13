// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module
"use strict";
// TODO(gdi2290): switch to DLLs
// Angular 2
require('@angular/platform-browser');
require('@angular/platform-browser-dynamic');
require('@angular/core');
require('@angular/common');
require('@angular/forms');
require('@angular/http');
require('@angular/router');
// AngularClass
// import '@angularclass/hmr';
require('moment');
require('ng2-charts');
require('ng2-bootstrap');
// RxJS
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
// if ('production' === ENV) {
//     // Production
//
//
// } else {
//     // Development
//
// }
//# sourceMappingURL=vendor.js.map