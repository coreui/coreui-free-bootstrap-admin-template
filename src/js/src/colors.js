/* global rgbToHex */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v3.0.0-alpha.0): colors.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

document.querySelectorAll('.theme-color').forEach((element) => {
  const color = getComputedStyle(element, null).getPropertyValue('background-color')
  const table = document.createElement('table')
  table.classList.add('w-100')
  table.innerHTML = `
      <table class="c-w-100">
        <tr>
          <td class="c-text-muted">HEX:</td>
          <td class="c-font-weight-bold">${rgbToHex(color)}</td>
        </tr>
        <tr>
          <td class="c-text-muted">RGB:</td>
          <td class="c-font-weight-bold">${color}</td>
        </tr>
      </table>
    `
  element.parentNode.appendChild(table)
})
