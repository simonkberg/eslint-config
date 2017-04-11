module.exports = {
  parser: 'babel-eslint',
  extends: ['standard'],
  plugins: ['babel'],
  env: {
    browser: true,
  },
  rules: {
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        // Prevent trailing commas in functions as this is
        // still not widely supported.
        functions: 'never',
      },
    ],

    // Unfixable, incompatible with prettier.
    'no-mixed-operators': 0,

    // Makes prettier-eslint adapt the default behaviour for
    // curly spacing without enforcing it as an eslint rule.
    'object-curly-spacing': [0, 'always'],

    // Disable the default semi-rule and use the version from
    // the babel plugin, which works with class properties.
    semi: 0,
    'babel/semi': [2, 'never'],
  },
}
