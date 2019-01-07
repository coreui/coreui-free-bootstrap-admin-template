/* global rgbToHex */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.1.11): colors.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

$('.theme-color').each(function () {
  const Color = $(this).css('backgroundColor')
  $(this).parent().append(`
    <table class="w-100">
      <tr>
        <td class="text-muted">HEX:</td>
        <td class="font-weight-bold">${rgbToHex(Color)}</td>
      </tr>
      <tr>
        <td class="text-muted">RGB:</td>
        <td class="font-weight-bold">${Color}</td>
      </tr>
    </table>
  `)
})
