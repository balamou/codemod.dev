const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // to enable source maps
  devServer: {
    static: './dist', // https://webpack.js.org/guides/development/#using-webpack-dev-server
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js', // no content hash here for dev
    clean: true, // clean output folder anytime we build
  },
});
