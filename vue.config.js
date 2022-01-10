const webpack = require('webpack');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    plugins: [new webpack.EnvironmentPlugin(['VUE_APP_SERVER_HOST', 'VUE_APP_LOCAL_SERVICE'])],
  },
};
