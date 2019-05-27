'use strict'

module.exports = {
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    require.resolve('eslint-config-prettier/@typescript-eslint'),
  ],
  rules: {
    '@typescript-eslint/camelcase': [
      'error',
      {
        properties: 'never',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      rules: {
        // Checked by Typescript - ts(2300)
        'no-dupe-args': 'off',
        // Checked by Typescript - ts(1117)
        'no-dupe-keys': 'off',
        // Checked by Typescript - ts(7027)
        'no-unreachable': 'off',
        // Checked by Typescript - ts(2367)
        'valid-typeof': 'off',
        // Checked by Typescript - ts(2588)
        'no-const-assign': 'off',
        // Checked by Typescript - ts(2588)
        'no-new-symbol': 'off',
        // Checked by Typescript - ts(2376)
        'no-this-before-super': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      env: { jest: true },
    },
  ],
}
