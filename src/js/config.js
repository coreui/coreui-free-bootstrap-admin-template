/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template config.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Theme Configuration from URL Parameters
 *
 * This module allows setting the initial theme via URL query parameters.
 * Useful for sharing links with specific theme preferences or testing different themes.
 *
 * Usage: Add ?theme=dark, ?theme=light, or ?theme=auto to the URL
 * Example: http://localhost:3000/index.html?theme=dark
 *
 * The selected theme is persisted to localStorage and will be used as the default
 * until changed by the user or another URL parameter.
 */

(() => {
  const THEME = 'coreui-free-bootstrap-admin-template-theme'
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])

  if (urlParams.get('theme') && ['auto', 'dark', 'light'].includes(urlParams.get('theme'))) {
    localStorage.setItem(THEME, urlParams.get('theme'))
  }
})()
