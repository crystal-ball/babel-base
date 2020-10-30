import fs from 'fs'
import path from 'path'

import { TransformOptions } from '@babel/core'

import { Env } from './types'
import { testEnv } from './test-env'

/**
 * 📝 Babel configurations
 *
 * - Project wide configuration file type `babel.config.js` used to set the
 *   "root" configurations. This is required for any project that needs to
 *   transform a linked npm package.
 * - Configs are specified by environment to make it easier to understand how
 *   each env is transformed.
 * - Only polyfills required for application code are added with the `usage`
 *   option of the preset-env `useBuiltIns`, but this does assume that libraries
 *   have properly handled compiling their polyfills.
 * - Under the hood calling `api.env` will enable caching based on NODE_ENV
 *
 * 📝 Core JS
 *
 * CoreJS includes the polyfills for new language features compiled by Babel.
 * The recommendation for polyfilling is to include the complete set of
 * polyfills needed for the target environment (vs only including polyfills used
 * in app code with `useBuiltIns: 'usage'`). Many libraries will transpile their
 * code but do not polyfill, and it's hard to tell whether polyfills are needed
 * in evergreen browsers because they don't need any.
 *
 * To completely polyfill for target envs, best practice is to use polyfill.io
 * for projects that can experience downtime, and to bundle polyfills with
 * preset-env for projects with critical uptimes.
 *
 * To polyfill with preset-env, set `useBuiltIns` to `entry` and import the
 * core-js and regenerator-runtime packages first in the application entry.
 * Preset env will transform them to just the polyfills needed to match the
 * targets environment. Explicitly set the `core-js` version used by
 * `preset-env` per Babel best practices.
 * - Polyfills are big, around 46.6kb for the `defaults` env target!
 * - For applications that need a guarantee for polyfilling, set the
 * - Optionally experimental features can be polyfilled by setting corejs to:
 *   { version: 3, proposals: true } (don't)
 * - Optionally the transform-runtime plugin accepts a `corejs` configuration
 *   option that will use imports from core-js to polyfill language features
 *   instead of adding polyfills to global scope (this is preferred for package
 *   compilation) Note that enabling this requires adding `@babel/runtime-corejs3`
 *   as a dependency.
 */
export default function reactConfigs(env: Env): TransformOptions {
  return {
    // --------------------------------------------------------
    // Presets
    presets: [
      // Automatically use the minimum set of syntax and polyfill transforms to
      // meet target environment using browserslist config.
      [
        '@babel/preset-env',
        {
          // Transpile to browserslist default versions, which is any browser
          // that isn't dead and has >0.5% market share
          targets: 'defaults',
          // Transform modules to common js in test for Jest
          // Disable module transformation in dev and prod builds to allow
          // webpack to smart-manage modules.
          modules: testEnv(env, ['test']) ? 'commonjs' : false,
          // Transforms the core-js and regenerator-runtime imports in index.js
          // to only the polyfills needed for the target environments
          useBuiltIns: 'entry',
          // Configure core-js version used for polyfills
          corejs: 3,
        },
      ],

      // Includes plugins required to transform JSX and opts in to the automatic
      // runtime which auto imports the functions that JSX transpiles to.
      // Development option toggles plugins that add references to source and
      // self on each component
      [
        '@babel/preset-react',
        { development: testEnv(env, ['development']), runtime: 'automatic' },
      ],

      // Enable TypeScript usage 🔐
      '@babel/preset-typescript',
    ],

    // --------------------------------------------------------
    // Plugins
    plugins: [
      // Auto-loads different transforms by env 😱... In development the `hot`
      // fn is magically transformed to extend HMR to handle components.
      // In production, plugin will replace `hot(module)(App)` with `App` which is
      // important for webpack optimizations
      // Ref: https://github.com/gaearon/react-hot-loader/issues/1080
      'react-hot-loader/babel',

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
          useESModules: testEnv(env, ['development', 'production']),
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

    env: {
      production: {
        plugins: [
          // Strip component prop types in production builds
          'transform-react-remove-prop-types',
        ],
      },
    },
  }
}
