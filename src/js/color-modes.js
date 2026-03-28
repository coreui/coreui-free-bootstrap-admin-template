/*!
* Color mode toggler for CoreUI's docs (https://coreui.io/)
* Copyright (c) 2026 creativeLabs Łukasz Holeczek
* Licensed under the Creative Commons Attribution 3.0 Unported License.
*/

/**
 * Dark/Light Theme Switcher
 *
 * This module manages the application's color scheme (light/dark/auto mode).
 * It handles:
 * - Persisting theme preference to localStorage
 * - Detecting system color scheme preference (prefers-color-scheme)
 * - Updating the DOM with the selected theme
 * - Managing the theme toggle UI in the header
 * - Dispatching ColorSchemeChange events for chart updates
 *
 * Theme modes:
 * - 'light': Force light theme
 * - 'dark': Force dark theme
 * - 'auto': Follow system preference
 *
 * The theme is applied via [data-coreui-theme] attribute on <html> element.
 */

(() => {
  const THEME = 'coreui-free-bootstrap-admin-template-theme'

  /**
   * Retrieves the stored theme preference from localStorage
   * @returns {string|null} Theme name ('light', 'dark', 'auto') or null
   */
  const getStoredTheme = () => localStorage.getItem(THEME)

  /**
   * Saves the theme preference to localStorage
   * @param {string} theme - Theme name ('light', 'dark', or 'auto')
   */
  const setStoredTheme = theme => localStorage.setItem(THEME, theme)

  /**
   * Determines the preferred theme based on stored preference or system setting
   * @returns {string} Preferred theme ('light' or 'dark')
   */
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()

    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  /**
   * Applies the theme to the document and dispatches a change event
   * @param {string} theme - Theme to apply ('light', 'dark', or 'auto')
   */
  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-coreui-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-coreui-theme', theme)
    }

    const event = new Event('ColorSchemeChange')
    document.documentElement.dispatchEvent(event)
  }

  setTheme(getPreferredTheme())

  /**
   * Updates the theme toggle UI to reflect the active theme
   * @param {string} theme - Currently active theme
   */
  const showActiveTheme = theme => {
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-coreui-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('xlink:href')

    for (const element of document.querySelectorAll('[data-coreui-theme-value]')) {
      element.classList.remove('active')
    }

    btnToActive.classList.add('active')
    activeThemeIcon.setAttribute('xlink:href', svgOfActiveBtn)
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    for (const toggle of document.querySelectorAll('[data-coreui-theme-value]')) {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-coreui-theme-value')
        setStoredTheme(theme)
        setTheme(theme)
        showActiveTheme(theme)
      })
    }
  })
})()
