/* eslint-env jest */

'use strict'

const fs = require('fs')
const path = require('path')
const config = require('./flowtype.js')
const { CLIEngine } = require('eslint')

const cli = new CLIEngine({
  ignore: false,
  useEslintrc: false,
  configFile: path.resolve(__dirname, 'flowtype.js'),
})

const testFile = filepath =>
  new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, file) => {
      if (err) {
        reject(err)
      } else {
        resolve(cli.executeOnText(file, filepath))
      }
    })
  })

expect.addSnapshotSerializer({
  print: val => JSON.stringify(val.replace(__dirname, '<PROJECT_ROOT>')),
  test: val => typeof val === 'string',
})

describe('@simonkberg/eslint-config/flowtype', () => {
  it('should match the snapshot', () => expect(config).toMatchSnapshot())

  it('should load config in eslint', async () => {
    const result1 = await testFile(
      path.resolve(__dirname, '__fixtures__/flowtype.js')
    )

    expect(result1.errorCount).toBe(0)
    expect(result1.warningCount).toBe(0)
  })
})
