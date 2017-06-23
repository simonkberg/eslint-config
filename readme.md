# @simonkberg/eslint-config

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

A shareable eslint config for my JavaScript projects.

## Install:

```
yarn add --dev @simonkberg/eslint-config
```

Add to `package.json`:
```
{
  "eslintConfig": {
    "extends": "@simonkberg/eslint-config"
  }
}
```

## Config:

#### Extends:
- [eslint-config-standard]
- [eslint-config-prettier]

[build-badge]: https://img.shields.io/travis/simonkberg/eslint-config/master.svg?style=flat-square
[build]: https://travis-ci.org/simonkberg/eslint-config

[npm-badge]: https://img.shields.io/npm/v/@simonkberg/eslint-config.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@simonkberg/eslint-config

[eslint-config-standard]: https://www.npmjs.com/package/eslint-config-standard
[eslint-config-prettier]: https://www.npmjs.com/package/eslint-config-prettier
