/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template colors.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

for (const element of document.querySelectorAll('.theme-color')) {
  const color = getComputedStyle(element, null).getPropertyValue('background-color')
  const table = document.createElement('table')
  table.classList.add('w-100')
  table.innerHTML = `
      <table class="w-100">
        <tr>
          <td class="text-body-secondary">HEX:</td>
          <td class="font-weight-bold">${coreui.Utils.rgbToHex(color)}</td>
        </tr>
        <tr>
          <td class="text-body-secondary">RGB:</td>
          <td class="font-weight-bold">${color}</td>
        </tr>
      </table>
    `
  element.parentNode.append(table)
}
