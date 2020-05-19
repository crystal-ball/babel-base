/**
 * Babel entry
 */

import nodeConfigs from './node'
import reactConfigs from './react'

type Options = {
  aliases?: { [key: string]: string }
  env: (string) => boolean
  target: 'node' | 'react'
}

type Configs = {
  presets: Array<any>
  plugins: Array<any>
}

export default function babelBase({ aliases, env, target }: Options): Configs {
  return target === 'node' ? nodeConfigs({ aliases }) : reactConfigs(env, { aliases })
}
