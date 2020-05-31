'use strict'

const eloquence = require('eslint-config-eloquence')

const configs = eloquence({ target: 'node' })
// No async setup hook provided for Babel configs
configs.rules['node/no-sync'] = 'off'

module.exports = configs
