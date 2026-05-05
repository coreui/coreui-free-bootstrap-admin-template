import { format } from 'prettier'

const VOID_ELEMENTS = 'area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr'
const VOID_ELEMENTS_RE = new RegExp(`<(${VOID_ELEMENTS})(\\s[^>]*)?\\s*/>`, 'gi')

export const formatHtml = async html => {
  const formatted = await format(html, {
    parser: 'html',
    printWidth: Number.POSITIVE_INFINITY,
    tabWidth: 2,
    useTabs: false,
    htmlWhitespaceSensitivity: 'ignore'
  })

  return formatted.replace(VOID_ELEMENTS_RE, (_, tag, attrs) => `<${tag}${attrs ? attrs.trimEnd() : ''}>`)
}
