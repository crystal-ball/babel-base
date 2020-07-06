import fs from 'fs'
import path from 'path'

import { TransformOptions } from '@babel/core'

export default function nodeConfigs(): TransformOptions {
  return {
    presets: [
      [
        // Automatically use the minimum set of syntax and polyfill transforms to
        // meet target environment using browserslist config.
        '@babel/preset-env',
        {
          // Transpile to current LTS
          targets: 'node 12',
          // Transform modules to common js in test for Jest
          // Disable module transformation in dev and prod builds to allow
          // webpack to smart-manage modules.
          modules: 'commonjs',
          // Transforms the core-js and regenerator-runtime imports in index.js
          // to only the polyfills needed for the target environments
          useBuiltIns: 'entry',
          // Configure core-js version used for polyfills. Do not automatically
          // polyfill *proposals* with { version: 3, proposals: true }, if a
          // consumer needs additional proposals polyfilled they can include them
          // in the entry
          corejs: 3,
        },
      ],

      // Enable TypeScript usage 🔐
      '@babel/preset-typescript',
    ],
    plugins: [
      // Transform Runtime will transform inline Babel helper fns to imports from
      //   @babel/runtime
      // Passing useESModules disables running helper imports through the common
      //   js module transform and allows webpack to manage the esm
      // Passing corejs configs will use imports from @babel/runtime-corejs3
      //   instead of global polyfills (this should be set for libraries but is
      //   optional for applications)
      // Do not set corejs, that will use module scoped polyfilled helpers, but
      //   env is polyfilled so we would double polyfill
      [
        '@babel/plugin-transform-runtime',
        {
          useESModules: false,
          // https://github.com/babel/babel/issues/10261
          // eslint-disable-next-line
          version: require('@babel/helpers/package.json').version,
        },
      ],

      // Transforms aliased imports to resolveable paths
      [
        'babel-plugin-transform-import-aliases',
        { aliases: { '@': path.resolve(fs.realpathSync(process.cwd()), 'src') } },
      ],
    ],
  }
}
