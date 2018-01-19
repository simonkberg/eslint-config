# @simonkberg/eslint-config

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

A shareable eslint config for my JavaScript projects.

## Install:

```
yarn add --dev @simonkberg/eslint-config
```

### Base config

#### Extends:

* [eslint-config-standard]
* [eslint-config-prettier]
* [eslint-config-prettier/standard][eslint-config-prettier]

#### Usage:

```json
{
  "eslintConfig": {
    "extends": "@simonkberg/eslint-config"
  }
}
```

### React config

#### Extends:

* [eslint-config-standard-react]
* [eslint-config-prettier/react][eslint-config-prettier]

#### Usage:

```json
{
  "eslintConfig": {
    "extends": ["@simonkberg/eslint-config", "@simonkberg/eslint-config/react"]
  }
}
```

[build-badge]: https://img.shields.io/travis/simonkberg/eslint-config/master.svg?style=flat-square
[build]: https://travis-ci.org/simonkberg/eslint-config
[npm-badge]: https://img.shields.io/npm/v/@simonkberg/eslint-config.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@simonkberg/eslint-config
[eslint-config-standard]: https://github.com/standard/eslint-config-standard
[eslint-config-standard-react]: https://github.com/standard/eslint-config-standard-react
[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier
