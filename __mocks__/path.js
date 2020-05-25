// Mock path.resolve to create stable @ alias transform paths in testing
export default {
  resolve: () => '/usr/code/src',
}
