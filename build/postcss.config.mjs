const mapConfig = {
  inline: false,
  annotation: true,
  sourcesContent: true
}

export default () => {
  return {
    map: mapConfig,
    plugins: {
      autoprefixer: {
        cascade: false
      },
      'postcss-combine-duplicated-selectors': {},
      'postcss-drop-empty-css-vars': {}
    }
  }
}
