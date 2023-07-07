const { createTransformer } = require('babel-jest');

module.exports = createTransformer({
  process(src, filename) {
    return 'module.exports = ' + JSON.stringify(filename) + ';';
  },
});
