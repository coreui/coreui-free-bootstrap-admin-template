/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template popovers.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Popover Initialization
 *
 * This module automatically initializes all CoreUI Popover components on the page.
 * Popovers are similar to tooltips but can contain more content and are triggered
 * by clicks instead of hover.
 *
 * Any element with [data-coreui-toggle="popover"] will be initialized automatically.
 * Used on pages like views/notifications/popovers.html
 *
 * @see https://coreui.io/bootstrap/docs/components/popovers/
 */

for (const element of document.querySelectorAll('[data-coreui-toggle="popover"]')) {
  // eslint-disable-next-line no-new
  new coreui.Popover(element)
}

