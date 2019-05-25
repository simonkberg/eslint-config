'use strict'

module.exports = {
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    require.resolve('eslint-config-prettier/@typescript-eslint'),
  ],
}
