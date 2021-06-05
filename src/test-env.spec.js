import { testEnv } from './test-env'

describe('babelBase', () => {
  it('returns true for a single environment', () => {
    expect(testEnv('development', ['development'])).toBe(true)
  })

  it('returns true for a multiple environments', () => {
    expect(testEnv('development', ['development', 'test'])).toBe(true)
  })

  it('returns false when unmatched', () => {
    expect(testEnv('development', ['production'])).toBe(false)
  })
})
