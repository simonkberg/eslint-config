/* eslint-env jest */

'use strict'

const fs = require('fs')
const path = require('path')
const config = require('./typescript.js')
const { CLIEngine } = require('eslint')

expect.addSnapshotSerializer({
  print: val => JSON.stringify(val.replace(__dirname, '<PROJECT_ROOT>')),
  test: val => typeof val === 'string',
})

describe('@simonkberg/eslint-config/typescript', () => {
  it('should match the snapshot', () => expect(config).toMatchSnapshot())

  it('should load config in eslint', done => {
    const cli = new CLIEngine({
      ignore: false,
      useEslintrc: false,
      configFile: path.resolve(__dirname, 'typescript.js'),
    })

    fs.readFile(
      path.resolve(__dirname, '__fixtures__/typescript.ts'),
      'utf-8',
      (err, file) => {
        expect(err).toBeNull()

        const { errorCount, warningCount } = cli.executeOnText(file)

        expect(errorCount).toBe(0)
        expect(warningCount).toBe(0)
        done()
      }
    )
  })
})
