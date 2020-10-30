import { Env } from './types'

/** Tests the current env against target envs for toggling features by environment */
export const testEnv = (currentEnv: Env, targetEnvs: Env[]): boolean =>
  targetEnvs.includes(currentEnv)
