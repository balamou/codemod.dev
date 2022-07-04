const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // to enable source maps
  devServer: {
    static: './dist', // https://webpack.js.org/guides/development/#using-webpack-dev-server
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  optimization: {
    // https://stackoverflow.com/a/66197410
    runtimeChunk: 'single',
  },
  output: {
    globalObject: 'self',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // no content hash here for dev
    clean: true, // clean output folder anytime we build
  },
  ignoreWarnings: [
    {
      // https://github.com/babel/babel/issues/14301#issuecomment-1054299724
      module: /node_modules\/\@babel\/standalone\/babel.js/,
      message: new RegExp(
        'Critical dependency: the request of a dependency is an expression'.replace(
          /\s/g,
          '\\s',
        ),
      ),
    },
  ],
});
