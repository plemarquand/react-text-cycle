const config = require('../webpack.config.js');

module.exports = function(storybookBaseConfig) {
  storybookBaseConfig.module.loaders = storybookBaseConfig.module.loaders.concat([config.module.loaders]);
  // These externals are required to get mocha integration to work.
  storybookBaseConfig.externals = {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
    'colors': 'window'
  };
  return storybookBaseConfig;
};
