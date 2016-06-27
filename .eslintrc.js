var OFF = 0, WARN = 1, ERROR = 2;
 
module.exports = exports = {
  env: {
    'es6': true,        // We are writing ES6 code
    'browser': true,    // for the browser
    'commonjs': true    // and use require() for stylesheets
  },
  ecmaFeatures: {
    'modules': true
  },
  rules: {
    "strict" : OFF,
    "no-console": OFF,
    "new-cap": OFF,
    "strict": OFF,
    "no-underscore-dangle": OFF,
    "no-use-before-define": OFF,
    "eol-last": OFF,
    "quotes": [ERROR, "single"],
  },
  parser: "babel-eslint",
  parserOptions: {
      "sourceType": "module",
  }
}