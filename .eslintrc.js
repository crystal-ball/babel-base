'use strict'

const eloquence = require('eslint-config-eloquence')

module.exports = {
  root: true,
  ...eloquence({ target: 'node' }),
}
