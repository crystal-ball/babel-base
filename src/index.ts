/**
 * Babel entry
 */

import nodeConfigs from './node'
import reactConfigs from './react'
import { BaseTransformOptions, Env } from './types'

type Options = {
  env: Env
  target: 'node' | 'react'
}

export function babelBase({ env, target }: Options): BaseTransformOptions {
  return target === 'node' ? nodeConfigs() : reactConfigs(env)
}
