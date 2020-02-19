'use strict'

// Mock path.resolve to create stable @ alias transform paths in testing
module.exports = {
  resolve: () => '/usr/code/src',
}
