const merge = require('webpack-merge');

const webpackBaseConf = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConf, {
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    filename: '[name]-[hash].js',
    sourceMapFilename: 'sourcemaps/[file].map',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/public/',
    pathinfo: false
  },
});
