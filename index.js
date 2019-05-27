'use strict'

module.exports = {
  extends: [
    require.resolve('eslint-config-standard'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/standard'),
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
      env: { jest: true },
    },
  ],
}
