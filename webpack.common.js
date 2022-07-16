const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    index: './src/index.ts',
    'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
    'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
    'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
    'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
    'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.ttf$/,
        // file-loder is depracated
        // https://webpack.js.org/guides/asset-modules/
        use: ['file-loader'],
      },
      {
        test: /\.sample\.js$/,
        type: 'asset/source',
      },
    ],
  },
  resolve: {
    // https://webpack.js.org/configuration/resolve/#resolveextensions
    extensions: ['.tsx', '.ts', '.js', '.mjs', '.css'],
    // https://webpack.js.org/configuration/resolve/#:~:text=webpack%205%20no%20longer%20polyfills%20node.js%20core%20modules%20automatically%20which%20means%20if%20you%20use%20them%20in%20your%20code%20running%20in%20browsers%20or%20alike%2C%20you%20will%20have%20to%20install%20compatible%20modules%20from%20npm%20and%20include%20them%20yourself.
    // ignore those core node modules if we are running in the browser.
    alias: {
      crypto: false,
      net: false,
      os: false,
      path: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
      hash: true,
    }),
  ],
};
