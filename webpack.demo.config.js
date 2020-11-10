const merge = require('webpack-merge');
const path = require('path');

const webpackBaseConf = require('./webpack.base.config.js');

const OUTPUT_PATH = path.resolve(__dirname, './publish/');

module.exports = merge(webpackBaseConf, {
  mode: 'demo',
  devtool: 'hidden-source-map',
  output: {
    path: OUTPUT_PATH,
    filename: '[name]-[hash].js',
    sourceMapFilename: 'sourcemaps/[file].map',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/react-app-template/publish/',
    pathinfo: false
  }
});
