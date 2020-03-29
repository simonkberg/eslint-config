'use strict'

module.exports = {
  parser: require.resolve('babel-eslint'),
  plugins: ['react-hooks'],
  extends: [
    require.resolve('eslint-config-standard-react'),
    require.resolve('eslint-config-prettier/react'),
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
  rules: {
    // Override for prettier due to config ordering
    'jsx-quotes': 'off',
  },
  overrides: [
    {
      // the override for plain .js files is configured in the base config
      files: ['**/__tests__/**/*.jsx', '**/?(*.)+(spec|test).jsx'],
      env: { jest: true },
    },
  ],
}
