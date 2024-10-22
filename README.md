<div align="right">
  <h1 align="right">
    <img height=75 src="./docs/assets/readme-header.png" alt="babel base">
  </h1>

  <!-- prettier-ignore-start -->
  <a href="https://www.npmjs.com/package/@crystal-ball/babel-base">
    <img src="https://img.shields.io/npm/v/@crystal-ball/babel-base" alt="Package version" valign="text-top"/>
  </a>
  <a href="https://www.npmjs.com/package/@crystal-ball/babel-base">
    <img src="https://img.shields.io/npm/dt/@crystal-ball/babel-base?color=blue" alt="NPM downloads" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/babel-base/actions?workflow=CI%2FCD">
    <img src="https://github.com/crystal-ball/babel-base/workflows/CI%2FCD/badge.svg" alt="Build status" valign="text-top" />
  </a>
  <a href="https://snyk.io/test/github/crystal-ball/babel-base?targetFile=package.json">
    <img src="https://snyk.io/test/github/crystal-ball/babel-base/badge.svg?targetFile=package.json" alt="Known vulnerabilities" valign="text-top" />
  </a>
  <a href="https://codeclimate.com/github/crystal-ball/babel-base/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/be98f6c629b6473bd3f6/test_coverage" alt="Test coverage" valign="text-top" />
  </a>
  <a href="https://codeclimate.com/github/crystal-ball/babel-base/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/be98f6c629b6473bd3f6/maintainability" alt="Maintainability" valign="text-top" />
  </a>
  <code>:status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>

  <br />
  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/Renovate-enabled-32c3c2.svg" alt="Renovate" valign="text-top" />
  </a>
  <a href="https://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/Commitizen-%E2%9C%93%20friendly-10e67b" alt="Commitizen friendly" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/babel-base#workspaces/-projects-5b88b5c9af3c0a2186966767/board?repos=136812233">
    <img src="https://img.shields.io/badge/ZenHub-managed-5e60ba.svg" alt="ZenHub" valign="text-top" />
  </a>
  <a href="https://semantic-release.gitbook.io/semantic-release/">
    <img src="https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic_release-e10079.svg" alt="Semantic Release" valign="text-top"/>
  </a>
  <a href="./CODE_OF_CONDUCT.md">
    <img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0-de8cf2.svg" alt="Contributor Covenant" valign="text-top" />
  </a>
  <code>:integrations</code>

  <br />
  <a href="https://github.com/crystal-ball">
    <img src="https://img.shields.io/badge/%F0%9F%94%AE%E2%9C%A8-contains_magic-D831D7.svg" alt="Contains magic" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/crystal-ball.github.io">
    <img src="https://img.shields.io/badge/%F0%9F%92%96%F0%9F%8C%88-full_of_love-F5499E.svg" alt="Full of love" valign="text-top" />
  </a>
  <code>:flair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
  <!-- prettier-ignore-end -->

  <h1></h1>
  <br />
  <p align="center">
    <em>This package generates a base Babel configuration and dependencies for
    React applications and Node services. Users can customize the generated base
    configurations to meet the specific needs of any project.</em>
  </p>
  <br />
</div>

## ⚙️ Setup

**1. Install**

```sh
npm i @crystal-ball/babel-base -DE
npm i @babel/runtime -E
```

**2. Setup a Babel config**

```javascript
// babel.config.js
'use strict'

const { babelBase } = require('@crystal-ball/babel-base')

module.exports = function babelConfigs() {
  // Generate base Babel configs for your target project type
  const baseConfigs = babelBase({
    env: 'development|production|test',
    target: 'node|react',
  })

  /* Optionally override the base configs as needed... */

  return baseConfigs
}
```

## React projects

**1. Install packages**

```sh
# Install polyfills included in application bundle
npm i core-js regenerator-runtime -E

# Install Linaria preset as a dev dependency
npm i @linaria/babel-preset react-refresh -DE
```

**2. Import polyfills**

```javascript
// src/index.js
/**
 * Polyfill environments, these imports will be transformed to just the
 * polyfills needed to meet the browserslist targets by the `entry` config for
 * `@babel/preset-env`
 */
import 'core-js'
import 'regenerator-runtime/runtime'
```
