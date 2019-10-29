const rewire = require('react-app-rewire-hot-loader');

module.exports = (config, env) => {
  config = rewire(config, env);
  config.resolve.alias = {
    // insert existing aliases if any, to play nice
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };
  return config;
};
