# @simonkberg/eslint-config-react

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

A shareable eslint config for my React projects.

## Install:

```
npm i -D @simonkberg/eslint-config-react
```

Add to `.eslintrc`:
```
{
  "extends": "@simonkberg/eslint-config-react"
}
```

## Config:

- Parser:
  - [babel-eslint]
- Extends:
  - [eslint-config-standard]
  - [eslint-config-standard-react]
- Plugins:
  - [eslint-plugin-babel]
- Environment:
  - browser
- Rules:
  - **comma-dangle**: `always-multiline`

[build-badge]: https://img.shields.io/travis/simonkberg/eslint-config-react/master.svg?style=flat-square
[build]: https://travis-ci.org/simonkberg/eslint-config-react

[npm-badge]: https://img.shields.io/npm/v/@simonkberg/eslint-config-react.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@simonkberg/eslint-config-react

[babel-eslint]: https://www.npmjs.com/package/babel-eslint
[eslint-config-standard]: https://www.npmjs.com/package/eslint-config-standard
[eslint-config-standard-react]: https://www.npmjs.com/package/eslint-config-standard-react
[eslint-plugin-babel]: https://www.npmjs.com/package/eslint-plugin-babel
