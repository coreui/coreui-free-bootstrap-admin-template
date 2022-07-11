/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v4.2.0): popovers.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new coreui.Toast(toastLiveExample);
    toast.show();
  });
}
//# sourceMappingURL=toasts.js.map