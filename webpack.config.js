/* global __dirname */
var CopyWebpackPlugin = require("copy-webpack-plugin")
var path = require("path")
var src = path.resolve(__dirname, "src")
var build = path.resolve(__dirname, "build")
var webpack = require("webpack")

module.exports = {
  entry: path.resolve(src, "main.js"),
  output: {
    path: build,
    filename: "bundle.js",
  },
  devServer: {
    contentBase: build,
    quiet: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: src,
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: src,
      },
    ]),
    new webpack.NoErrorsPlugin(),
  ],
  stats: {
    colors: true,
  },
  devtool: "source-map",
  sassLoader: {
    includePaths: [
      src,
    ],
  },
}
