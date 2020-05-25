/**
 * Babel entry
 */

import { TransformOptions } from '@babel/core'

import nodeConfigs from './node'
import reactConfigs from './react'

type Options = {
  env: (string) => boolean
  target: 'node' | 'react'
}

export default function babelBase({ env, target }: Options): TransformOptions {
  return target === 'node' ? nodeConfigs() : reactConfigs(env)
}
