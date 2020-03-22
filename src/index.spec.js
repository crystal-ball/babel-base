jest.mock('path')

import babelBase from './index'

const mockEnv = (testEnv) => (envs) => {
  if (typeof envs === 'string') {
    return envs === testEnv
  }

  return envs.includes(testEnv)
}

describe('babelBase', () => {
  test('when called with target node, then node babel configs are returned', () => {
    expect(babelBase({ env: mockEnv(), target: 'node' })).toMatchSnapshot()
  })

  test('when called with target react for dev, then development react configs are returned', () => {
    expect(babelBase({ env: mockEnv('development'), target: 'react' })).toMatchSnapshot()
  })

  test('when called with target react for test, then test react configs are returned', () => {
    expect(babelBase({ env: mockEnv('test'), target: 'react' })).toMatchSnapshot()
  })

  test('when called with target react for prod, then production react configs are returned', () => {
    expect(babelBase({ env: mockEnv('production'), target: 'react' })).toMatchSnapshot()
  })
})
