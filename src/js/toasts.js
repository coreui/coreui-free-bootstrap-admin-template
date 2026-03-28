/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template toasts.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Toast Notifications
 *
 * This module handles the live toast notification demo on views/notifications/toasts.html
 * Toasts are lightweight notifications that appear temporarily to show messages to users.
 *
 * This implementation shows a toast when the demo button is clicked.
 *
 * @see https://coreui.io/bootstrap/docs/components/toasts/
 */

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new coreui.Toast(toastLiveExample)
    toast.show()
  })
}
