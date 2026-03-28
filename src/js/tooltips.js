/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template tooltips.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Tooltip Initialization
 *
 * This module automatically initializes all CoreUI Tooltip components on the page.
 * Tooltips display helpful text on hover and are used throughout the template
 * for additional context and information.
 *
 * Any element with [data-coreui-toggle="tooltip"] will be initialized automatically.
 * Used on pages like views/notifications/tooltips.html
 *
 * @see https://coreui.io/bootstrap/docs/components/tooltips/
 */

for (const element of document.querySelectorAll('[data-coreui-toggle="tooltip"]')) {
  // eslint-disable-next-line no-new
  new coreui.Tooltip(element)
}
