/* eslint-env jest */

'use strict'

const fs = require('fs')
const path = require('path')
const config = require('./index.js')
const { CLIEngine } = require('eslint')

const cli = new CLIEngine({
  ignore: false,
  useEslintrc: false,
  configFile: path.resolve(__dirname, 'index.js'),
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

describe('@simonkberg/eslint-config', () => {
  it('should match the snapshot', () => expect(config).toMatchSnapshot())

  it('should load config in eslint', async () => {
    const result1 = await testFile(
      path.resolve(__dirname, '__fixtures__/base.js')
    )

    expect(result1.errorCount).toBe(0)
    expect(result1.warningCount).toBe(0)
  })

  it('should support jest environment', async () => {
    const result1 = await testFile(
      path.resolve(__dirname, '__fixtures__/__tests__/base.js')
    )

    expect(result1.errorCount).toBe(0)
    expect(result1.warningCount).toBe(0)

    const result2 = await testFile(
      path.resolve(__dirname, '__fixtures__/base.test.js')
    )

    expect(result2.errorCount).toBe(0)
    expect(result2.warningCount).toBe(0)
  })
})
