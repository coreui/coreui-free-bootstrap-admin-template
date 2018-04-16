/* global rgbToHex */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.0.0-beta.4): colors.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const ColorsView = (($) => {
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

  return ColorsView
})($)
