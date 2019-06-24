/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v3.0.0-alpha.0): popovers.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

document.querySelectorAll('[data-toggle="c-popover"]').forEach(element => {
  // eslint-disable-next-line no-new
  new coreui.Popover(element)
})

// $('[data-toggle="c-popover"]').popover()
// $('.popover-dismiss').popover({
//   trigger: 'focus'
// })
