const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const webpackBaseConf = require('./webpack.base.config.js');
const port = 30000;

module.exports = merge(webpackBaseConf, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    writeToDisk: true,
    compress: false,
    progress: true,
    liveReload: false,
    hot: true,
    port,
    proxy: {},
    before() {}
  }
});
