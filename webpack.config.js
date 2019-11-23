const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

module.exports = {
  mode: 'production',
  watch: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  entry: path.join(__dirname, 'src/frontend/app/demo.js'),
  output: {
    path: path.join(__dirname, 'static/dist'),
    filename: 'Efc.min.js',
    library: 'Efc'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader'
      ]
    }]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new BundleAnalyzerPlugin({
    openAnalyzer: false,
    defaultSizes: 'gzip',
    analyzerMode: 'static'
    })
  ]
}