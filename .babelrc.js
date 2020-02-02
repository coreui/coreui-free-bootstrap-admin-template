module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true,
          "ie": 10
        },
        useBuiltIns: "entry",
        corejs: {version: 3, proposals: true},
        loose: true,
        modules: "auto",
        exclude: ["transform-typeof-symbol"]
      }
    ]
  ],
  plugins: [
    process.env.PLUGINS && "transform-es2015-modules-strip",
    [
      "@babel/proposal-object-rest-spread", {
        loose: true,
        useBuiltIns: true
      }
    ],
    "@babel/plugin-proposal-throw-expressions"
  ].filter(Boolean),
  env: {
    test: {
      plugins: ["istanbul"],
    }
  }
};
