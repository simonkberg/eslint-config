// @flow

export const CONSTANTS = {
  FOO: 'foo',
  BAR: 'bar',
  BAZ: 'baz',
}

export type Constants = $Values<typeof CONSTANTS>

export type Foobar = {
  value: Constants,
}
