'use strict'

module.exports = {
  // Provides nice test output of what's being run
  verbose: true,

  // It's a Node project 😇
  testEnvironment: 'node',

  // OS notifications of test results is an opt in feature, enable by setting
  // a truthy env value in your shell environment
  // notify: Boolean(process.env.ENABLE_JEST_NOTIFICATIONS),

  // Collect test coverage of source files (excluding stories), report
  // text-summary for devs and lcov for reporting to Code Climate in CI/CD envs.
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov'],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.ts'],

  // Require 100% code coverage 🎉
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
