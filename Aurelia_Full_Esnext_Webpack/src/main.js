import "font-awesome/css/font-awesome.min.css";
import "../css/simple-line-icons.css";
import "bootstrap/scss/bootstrap.scss";

import "../scss/style.scss";
import "../styles/app.scss";

import "tether";
import "bootstrap";

import * as Bluebird from "bluebird";
import authConfig from "./authConfig";

// comment out if you don't want a Promise polyfill (remove also from webpack.common.js)
Bluebird.config({warnings: false});

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('shared-components')

    .plugin('aurelia-api', config => {

      // Register hosts
      config.registerEndpoint('data-api', 'data');
    })
    .plugin('aurelia-authentication', baseConfig => {
      baseConfig.configure(authConfig);
    })
    .plugin("aurelia-chart")
    .globalResources(['json-value-converter'])


  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  await aurelia.start();
  aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker), 
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
   const offline = await System.import('offline-plugin/runtime');
   offline.install();
   */
  //Security


}
