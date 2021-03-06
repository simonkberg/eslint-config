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

- [eslint-config-standard]
- [eslint-config-prettier]
- [eslint-config-prettier/standard][eslint-config-prettier]

#### Usage:

```json
{
  "eslintConfig": {
    "extends": "@simonkberg/eslint-config"
  }
}
```

### Flow type config

#### Extends:

- [eslint-plugin-flowtype/recommended][eslint-plugin-flowtype]
- [eslint-config-prettier/flowtype][eslint-config-prettier]

#### Usage:

```json
{
  "eslintConfig": {
    "extends": [
      "@simonkberg/eslint-config",
      "@simonkberg/eslint-config/flowtype"
    ]
  }
}
```

### React config

#### Extends:

- [eslint-config-standard-react]
- [eslint-config-prettier/react][eslint-config-prettier]

#### Usage:

```json
{
  "eslintConfig": {
    "extends": ["@simonkberg/eslint-config", "@simonkberg/eslint-config/react"]
  }
}
```

### TypeScript config

#### Extends:

- [plugin:@typescript-eslint/recommended][@typescript-eslint/eslint-plugin]
- [plugin:@typescript-eslint/eslint-recommended][@typescript-eslint/eslint-plugin]
- [eslint-config-prettier/@typescript-eslint][eslint-config-prettier]

#### Usage:

```json
{
  "eslintConfig": {
    "extends": [
      "@simonkberg/eslint-config",
      "@simonkberg/eslint-config/typescript"
    ]
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
[eslint-plugin-flowtype]: https://github.com/gajus/eslint-plugin-flowtype
[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
