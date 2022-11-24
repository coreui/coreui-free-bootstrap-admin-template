/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v4.2.2): popovers.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

for (const element of document.querySelectorAll('[data-coreui-toggle="popover"]')) {
  // eslint-disable-next-line no-new
  new coreui.Popover(element)
}

