const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const defaultConfig = require('./webpack.common')
const path = require('path')
const paths = require('./paths')

const HTMLMinifier = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  removeCDATASectionsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeAttributeQuotes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  minifyJS: true,
  minifyCSS: true,
}

const prodConfig = Object.assign({}, defaultConfig, {
  devtool: false,
  warnings: false,
  entry: {
    vendors: [
      'react',
      'react-dom',
    ],
    app: path.join(paths.appSrc, 'main'),
  },
  output: {
    publicPath: "/",
    path: paths.appBuild,
    filename: "static/[name]-[hash:8].bundle.js",
    chunkFilename: "static/[id]-[hash:8].chunk.js",
  },
})

const pluginPush = (data) => {
  prodConfig.plugins.push(
    data
  )
}
pluginPush(
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    mangle: true,
    compress: {
      warnings: false,
      drop_console: true,
    },
  })
)
// pluginPush(
//   new ManifestPlugin({
//     fileName: 'asset-manifest.json',
//   })
// )
pluginPush(
  new ExtractTextPlugin('static/[name].css')
)
pluginPush(
  new HtmlWebpackPlugin({
    template: paths.appHtml,
    minify: HTMLMinifier,
  })
)
prodConfig.module.loaders.push(
  {
    test: /\.scss$/,
    loader:
      ExtractTextPlugin.extract(
        'style',
        'css!postcss!sass?sourceMap'
      ),
  }
)
module.exports = prodConfig
