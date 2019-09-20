/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v3.0.0-alpha.1): popovers.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

document.querySelectorAll('[data-toggle="popover"]').forEach(element => {
  // eslint-disable-next-line no-new
  new coreui.Popover(element)
})

// $('[data-toggle="popover"]').popover()
// $('.popover-dismiss').popover({
//   trigger: 'focus'
// })
