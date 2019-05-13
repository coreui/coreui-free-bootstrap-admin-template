/* global rgbToHex */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.0.0): colors.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

$('.theme-color').each(function () {
  const Color = $(this).css('backgroundColor')
  $(this).parent().append(`
    <table class="c-w-100">
      <tr>
        <td class="c-text-muted">HEX:</td>
        <td class="c-font-weight-bold">${rgbToHex(Color)}</td>
      </tr>
      <tr>
        <td class="c-text-muted">RGB:</td>
        <td class="c-font-weight-bold">${Color}</td>
      </tr>
    </table>
  `)
})
