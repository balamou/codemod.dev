const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    globalObject: 'self',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    clean: true, // clean output folder anytime we build
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
