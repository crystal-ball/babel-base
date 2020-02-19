/**
 * Babel entry
 */

import nodeConfigs from './node'
import reactConfigs from './react'

type Options = {
  env: (string) => boolean
  target: 'node' | 'react'
}

type Configs = {
  presets: Array<any>
  plugins: Array<any>
}

export default function babelBase({ env, target }: Options): Configs {
  return target === 'node' ? nodeConfigs() : reactConfigs(env)
}
