export default context => ({
  map: context.file.dirname.includes('examples') ?
    false :
    {
      inline: false,
      annotation: true,
      sourcesContent: true
    },
  plugins: {
    'postcss-drop-empty-css-vars': {},
    autoprefixer: {
      cascade: false
    },
    'postcss-combine-duplicated-selectors': {}
  }
})
