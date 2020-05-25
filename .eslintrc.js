'use strict'

const eloquence = require('eslint-config-eloquence')

const configs = eloquence({ target: 'node' })

configs.rules = {
  ...configs.rules,

  // No async setup hook provided for Babel configs
  'node/no-sync': 'off',
}

module.exports = configs
