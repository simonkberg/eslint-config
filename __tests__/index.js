/* eslint-env jasmine */

const eslintrc = require('../')
const CLIEngine = require('eslint').CLIEngine
const isArray = Array.isArray.bind(Array)

describe('@simonkberg/eslint-config-react', () => {
  it('should return an object', () => {
    expect(typeof eslintrc).toEqual('object')
  })

  it('should use `babel-eslint` as parser', () => {
    expect(eslintrc.parser).toBeDefined()
    expect(eslintrc.parser).toEqual('babel-eslint')
  })

  it('should extend `standard` and `standard-react`', () => {
    expect(isArray(eslintrc.extends)).toEqual(true)

    expect(eslintrc.extends).toContain('standard')
    expect(eslintrc.extends).toContain('standard-react')
  })

  it('should use `babel` plugin', () => {
    expect(isArray(eslintrc.plugins)).toEqual(true)
    expect(eslintrc.plugins).toContain('babel')
  })

  it('should define `browser` as environment', () => {
    expect(typeof eslintrc.env).toEqual('object')
    expect(eslintrc.env.browser).toEqual(true)
  })

  it('should load config in eslint', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'eslintrc.json'
    })

    const stub = 'const foo = 1\nconst bar = baz => baz\nbar(foo)\n'
    const result = cli.executeOnText(stub)

    expect(result.errorCount).toEqual(0)
    expect(result.warningCount).toEqual(0)
  })
})
