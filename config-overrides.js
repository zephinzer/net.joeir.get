const path = require('path');
const rewire = require('react-app-rewire-hot-loader');
const {addWebpackAlias} = require('customize-cra');

module.exports = (config, env) => {
  config = rewire(config, env);
  config = addWebpackAlias({
    ['~/*']: path.resolve(__dirname, 'src'),
  })(config);
  config.resolve.alias = {
    // insert existing aliases if any, to play nice
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };
  return config;
};
