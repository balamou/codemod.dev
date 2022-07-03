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
      title: "Globals",
      filename: "index.html",
      hash: true,
      template: "./src/index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true, // clean output folder anytime we build
  },
};
