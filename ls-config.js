const config = require('./webpack.config')('whatever');
const baseDir = config.output.path;

module.exports = {
  server: {
    port: 8000,
    baseDir,
  },
};
