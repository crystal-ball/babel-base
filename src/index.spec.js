jest.mock('path')

import { babelBase } from '.'

describe('babelBase', () => {
  it('when called with target node, then node babel configs are returned', () => {
    expect(babelBase({ env: 'development', target: 'node' })).toMatchSnapshot()
  })

  it('when called with target react for dev, then development react configs are returned', () => {
    expect(babelBase({ env: 'development', target: 'react' })).toMatchSnapshot()
  })

  it('when called with target react for test, then test react configs are returned', () => {
    expect(babelBase({ env: 'test', target: 'react' })).toMatchSnapshot()
  })

  it('when called with target react for prod, then production react configs are returned', () => {
    expect(babelBase({ env: 'production', target: 'react' })).toMatchSnapshot()
  })
})
