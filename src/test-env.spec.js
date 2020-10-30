import { testEnv } from './test-env'

describe('babelBase', () => {
  test('returns true for a single environment', () => {
    expect(testEnv('development', ['development'])).toBe(true)
  })

  test('returns true for a multiple environments', () => {
    expect(testEnv('development', ['development', 'test'])).toBe(true)
  })

  test('returns false when unmatched', () => {
    expect(testEnv('development', ['production'])).toBe(false)
  })
})
