import { TransformOptions } from '@babel/core'

/** Supported environment values */
export type Env = 'development' | 'production' | 'test'

/** Package transform options includes an env map by default */
export type BaseTransformOptions = TransformOptions & {
  env: { [environment: string]: TransformOptions }
}
