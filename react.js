'use strict'

module.exports = {
  parser: require.resolve('babel-eslint'),
  plugins: ['react-hooks'],
  extends: [
    require.resolve('eslint-config-standard-react'),
    require.resolve('eslint-config-prettier/react'),
  ],
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  env: {
    browser: true,
  },
  rules: {
    // Override for prettier due to config ordering
    'jsx-quotes': 'off',
    'react-hooks/rules-of-hooks': 'error',
  },
}
