var webpack = require('webpack')
var path = require('path')
var paths = require('./paths')
var HtmlWebpackPlugin = require('html-webpack-plugin')
require('./environment')
const defaultConfig = require('./webpack.common')
import { log } from './log'

const devConfig = Object.assign({}, defaultConfig, {
  devtool: "source-map",
  publicPath: '/assets/',
  devServer: {
    contentBase: './build/',
    hot: true,
    historyApiFallback: true,
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    path.join(paths.appSrc, 'main'),
  ],
  watch: true,
  progress: true,
})

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)
devConfig.plugins.push(
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml,
  })
)
devConfig.module.loaders.push(
  {
    test: /\.scss$/,
    loaders: ["style", "css", "postcss", "sass"]
  }
)
log('Webpack dev config finished')
module.exports = devConfig
