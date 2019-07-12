## v2.1.15
- fix: babelrc config
- fix: missing favicon link
- fix: readme links
- fix(cards): outdated switch class, add card-header-actions
- chore(deps): bump lodash to 4.17.14

##### dependencies update
- update: `core-js` to `^3.1.4`
- update: `babel-eslint` to `^10.0.2`
- update: `@babel/cli` to `^7.5.0`
- update: `@babel/core` to `^7.5.4`
- update: `@babel/plugin-proposal-object-rest-spread` to `^7.5.4`
- update: `@babel/preset-env` to `^7.5.4`
- update: `autoprefixer` to `^9.6.1`
- update: `copyfiles` to `^2.1.1`
- update: `eslint-plugin-compat` to `^3.2.0`
- update: `postcss-cli` to `^6.1.3`
- update: `pug` to `^2.0.4`
- update: `stylelint-order` to `^3.0.1`
- update: `stylelint-scss` to `^3.9.1`

## v2.1.14
- fix(main): labelColor callback for CustomTooltips  
- chore: drop @babel/polyfill in favour of core-js@3 and regenerator-runtime

##### dependencies update
- update: `@coreui/coreui` to `^2.1.14`
- update: `@coreui/coreui-plugin-chartjs-custom-tooltips` to `^1.3.1`
- update: `chart.js` to `^2.8.0`
- update: `core-js` to `^3.1.3`
- update: `flag-icon-css` to `^3.3.0`
- update: `jquery` to `^3.4.1`
- update: `popper.js` to `^1.15.0`
- add: `regenerator-runtime` to `^0.13.2`
- update: `@babel/cli` to `^7.4.4`
- update: `@babel/core` to `^7.4.5`
- update: `@babel/plugin-proposal-object-rest-spread` to `^7.4.4`
- add: `@babel/plugin-proposal-throw-expressions` to `^7.2.0`
- update: `@babel/preset-env` to `^7.4.5`
- update: `autoprefixer` to `^9.6.0`
- update: `browser-sync` to `^2.26.7`
- update: `clean-css-cli` to `^4.3.0`
- update: `js-beautify` to `^1.10.0`
- update: `nodemon` to `^1.19.1`
- update: `node-sass` to `^4.12.0`
- update: `eslint` to `^5.16.0`
- update: `eslint-plugin-compat` to `^3.1.1`
- update: `stylelint` to `^10.1.0`
- update: `stylelint-config-recommended-scss` to `^3.3.0`
- update: `stylelint-config-standard` to `^18.3.0`
- update: `stylelint-order` to `^3.0.0`
- update: `stylelint-scss` to `^3.8.0`

## v2.1.12
- chore(build/vendors): removes hash tag from urls in css files #460 - thanks @mgsmus 
- update: `@coreui/coreui` to `^2.1.7`
- update: `bootstrap` to `^4.3.1`
- update: `core-js` to `^2.6.5`
- update: `popper.js` to `^1.14.7`
- update: `@babel/core` to `^7.3.3`
- update: `@babel/plugin-proposal-object-rest-spread` to `^7.3.2`
- update: `@babel/preset-env` to `^7.3.1`
- update: `autoprefixer` to `^9.4.8`
- update: `eslint` to `^5.14.1`
- update: `eslint-plugin-compat` to `^2.7.0`
- update: `nodemon` to `^1.18.10`
- update: `postcss-cli` to `^6.1.2`
- update: `stylelint` to `^9.10.1`
- update: `stylelint-scss` to `^3.5.3`

## v2.1.11
- fix(collapse): add `mb-0` to accordion cards, thanks @ubugnu #449
- update: `@coreui/coreui` to `^2.1.5`
- update: `bootstrap` to `^4.2.1`
- update: `core-js` to `^2.6.1`
- update: `perfect-scrollbar` to `^1.4.0`
- update: `popper.js` to `^1.14.6`
- update: `@babel/cli` to `^7.2.3`
- update: `@babel/core` to `^7.2.2`
- update: `@babel/plugin-proposal-object-rest-spread` to `^7.2.0`
- update: `@babel/preset-env` to `^7.2.3`
- update: `autoprefixer` to `^9.4.4`
- update: `chalk` to `^2.4.2`
- update: `eslint` to `^5.12.0`
- update: `js-beautify` to `^1.8.9`
- update: `node-sass` to `^4.11.0`
- update: `nodemon` to `^1.18.9`
- update: `postcss-cli` to `^6.1.1`
- update: `rimraf` to `^2.6.3`
- update: `stylelint` to `^9.9.0`
- update: `stylelint-scss` to `^3.4.4`


## v2.1.10
- fix: update `nodemon` to `1.18.7` (remove vulnerability)
- update: `@coreui/coreui` to `^2.1.3`
- update: `stylelint-order` to `^2.0.0`
- refactor(modals): buttons margin

## v2.1.9
- fix: devDependencies security issues (event-stream, flatmap-stream)
- chore: dependencies update
  - update `npm-run-all` to `^4.1.5`
  - reinstall `nodemon`
  ```bash
  npm uninstall nodemon
  npm install --save-dev nodemon
  ```
- update: `@coreui/coreui` to `^2.1.2`
- update: `popper.js` to `^1.14.5`
- update: `@babel/cli` to `^7.1.5`
- update: `@babel/core` to `^7.1.6`
- update: `@babel/preset-env` to `^7.1.6`
- update: `eslint` to `^5.9.0`
- update: `npm-run-all` to `^4.1.5`
- update: `shelljs` to `^0.8.3`
- update: `stylelint` to `^9.8.0`  
- update: `stylelint-scss` to `^3.4.0`

## v2.1.8
- feat(switches): add disabled switch example
- fix(switches): missing an ending semicolon
- fix(switches): add missing `<tr>`
- update: `@coreui/coreui` to `2.0.26`
- update: `eslint` to `5.8.0`
- update: `eslint-plugin-compat` to `2.6.3`
- update: `node-sass` to `4.10.0`
- update: `nodemon` to `1.18.6`
- update: `stylelint` to `9.7.1`  

## v2.1.7
- fix(pug): crossplatform use `path.sep` instead of `/` - thanks @vasilevich
- update: `@coreui/coreui` to `2.0.21`
  - feat(sidebar): mobile clickout behaviour
  - fix(layout): sidebar on mobile issue [#23](https://github.com/coreui/coreui-angular/issues/23)
  - fix: sidebar, sidebar-minimizer `rtl` ie issues, tweaks
  - refactor(sidebar.js): ps minor cleanup
- update: `flag-icon-css` to `3.2.1`
- update: `autoprefixer` to `9.3.1`
- update: `js-beautify` to `1.8.8`
- update: `postcss-cli` to `6.0.1`
- update: `stylelint-scss` to `3.3.2`

## v2.1.6
- fix(cards): smooth collapse card - thanks @MartijnBastiaansen #378
- fix(header): migrate `.divider` to `.dropdown-divider` - thanks @vanam #406
- chore: build/change-version cleanup
- docs(readme): fix broken hyperlinks to 6 versions
- update: `@coreui/coreui` to `2.0.19`
  - fix: `transparent` is not a valid rgb color ie issue
  - fix(card): rtl for card-header icon margins
  - fix(sidebar): rtl for sidebar-minimizer icon
  - fix(breadcrumb): rtl padding
  - fix(card): rtl float for card-header-actions
  - fix(sidebar): rtl ps scrollbar issue temp fix/refactor
  - feat(sidebar) badge margins for nav-dropdown-toggle
  - fix(scss): add missing light-blue color variable
- update: `chart.js` to `2.7.3`
- update: `core-js` to `2.5.7`
- update: `autoprefixer` to `9.2.0`
- update: `browser-sync` to `2.26.3`
- update: `eslint` to `5.7.0`
- update: `eslint-plugin-compat` to `2.6.2`
- update: `js-beautify` to `1.8.7`
- update: `node-sass` to `4.9.4`

## v2.1.5
- update: `@coreui/coreui` to `2.0.12` 
   - fix(layout) aside IE issue with .main margin on mobile
   - fix(sidebar) rtl IE issue with sidebar-minimized captions
   - fix(sidebar) rtl ps scrollbar issue temp fix
- update: `@babel/cli` to `7.1.2`
- update: `@babel/core` to `7.1.2`
- update: `eslint to `5.6.1`
- update: `foreach-cli` to `1.8.1`
 
## v2.1.4
- feat(basic-forms): add missing `date-input` 
- update: `@coreui/coreui` to `2.0.11` fixes some IE11 and `rtl` issues
- chore: update `babel-eslint` to `10.0.1`
- chore: update `stylelint` to `9.6.0`

## v2.1.3
- fix(sidebar.pug): split icons/flags `li.nav-item`
- update: `@coreui/coreui` to `2.0.9`
- update: `flag-icon-css` to `3.2.0`
- update: `@babel/cli` to `7.1.0`
- update: `@babel/core` to `7.1.0`
- update: `@babel/preset-env` to `7.1.0`
- update: `eslint` to `5.6.0`
- update: `js-beautify` to `1.8.6`
- update: `stylelint-scss` to `3.3.1`

## v2.1.2
- Update: `@coreui/coreui` to `2.0.6`
- Update: `bootstrap` to `4.1.3`
- Update: `popper.js` to `1.14.4`
- Update: `@babel/cli` to `^7.0.0`
- Update: `@babel/core` to `^7.0.0`
- Update: `@babel/plugin-proposal-object-rest-spread` to `^7.0.0`
- Update: `@babel/preset-env` to `^7.0.0`
- Update: `autoprefixer` to `^9.1.5`
- Update: `babel-eslint` to `^9.0.0`
- Update: `browser-sync` to `^2.24.7`
- Update: `clean-css-cli` to `^4.2.1`
- Update: `copyfiles` to `^2.1.0`
- Update: `cross-env` to `^5.2.0`
- Update: `eslint` to `^5.5.0`
- Update: `eslint-plugin-compat` to `^2.5.1`
- Update: `node-sass` to `^4.9.3`
- Update: `nodemon` to `^1.18.4`
- Update: `postcss-cli` to `^6.0.0`
- Update: `shelljs` to `^0.8.2`
- Update: `stylelint` to `^9.5.0`
- Update: `stylelint-order` to `^1.0.0`
- Update: `stylelint-scss` to `^3.3.0`

## v2.1.1
- Update: @coreui/coreui to 2.0.3
- Update: @babel/cli to 7.0.0-beta.53
- Update: @babel/core to 7.0.0-beta.53
- Update: @babel/plugin-proposal-object-rest-spread to 7.0.0-beta.53
- Update: @babel/preset-env to 7.0.0-beta.53
- Update: babel-eslint to 8.2.6
- Update: bootstrap to 4.1.2
- Update: eslint-plugin-compat to 2.5.0
- Update: nodemon to 1.18.1                                     

## v2.1.0
- **Feat: Add pug support**
- Update: @coreui/coreui-icons to 0.3.0
- Update: @coreui/coreui to 2.0.3
- Update: perfect-scrollbar to 1.4.0
