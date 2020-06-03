type $Values<O extends Record<string, unknown>> = O[keyof O]

export const CONSTANTS = {
  FOO: 'foo',
  BAR: 'bar',
  BAZ: 'baz',
}

export type Constants = $Values<typeof CONSTANTS>

export interface Foobar {
  value: Constants
}
