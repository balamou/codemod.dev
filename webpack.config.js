const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map", // to enable source maps
  devServer: {
    static: "./dist", // https://webpack.js.org/guides/development/#using-webpack-dev-server
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/template.html",
      hash: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contenthash].js",
    clean: true, // clean output folder anytime we build
  },
};
