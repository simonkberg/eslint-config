# @simonkberg/eslint-config

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

A shareable eslint config for my JavaScript projects.

## Install:

```
npm i -D @simonkberg/eslint-config
```

Add to `.eslintrc`:
```
{
  "extends": "@simonkberg/eslint-config"
}
```

## Config:

#### Parser:
- [babel-eslint]

#### Extends:
- [eslint-config-standard]

#### Plugins:
- [eslint-plugin-babel]

#### Environment:
- browser

#### Rules:

```js
'comma-dangle': {
  arrays: 'always-multiline',
  objects: 'always-multiline',
  imports: 'always-multiline',
  exports: 'always-multiline',
  // Prevent trailing commas in functions as this is
  // still not videly supported.
  functions: 'never',
},
```

```js
// Unfixable, incompatible with prettier.
'no-mixed-operators': 0,
```

```js
// Makes prettier-eslint adapt the default behaviour for
// curly spacing without enforcing it as an eslint rule.
'object-curly-spacing': [0, 'always'],
```

```js
// Disable the default semi-rule and use the version from
// the babel plugin, which works with class properties.
'semi': 0,
'babel/semi': [2, 'never'],
```

[build-badge]: https://img.shields.io/travis/simonkberg/eslint-config/master.svg?style=flat-square
[build]: https://travis-ci.org/simonkberg/eslint-config

[npm-badge]: https://img.shields.io/npm/v/@simonkberg/eslint-config.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@simonkberg/eslint-config

[babel-eslint]: https://www.npmjs.com/package/babel-eslint
[eslint-config-standard]: https://www.npmjs.com/package/eslint-config-standard
[eslint-plugin-babel]: https://www.npmjs.com/package/eslint-plugin-babel
