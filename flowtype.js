'use strict'

module.exports = {
  parser: require.resolve('babel-eslint'),
  plugins: ['flowtype'],
  extends: [
    require.resolve('eslint-plugin-flowtype/dist/configs/recommended'),
    require.resolve('eslint-config-prettier/flowtype'),
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
}
