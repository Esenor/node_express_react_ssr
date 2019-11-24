const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const entriesRepository = require('./entriesRepository')

const extractLibraryNameFormated = path => path.split('/').pop().replace('.js', '')
const extractFileNameFormated = path => path.split('/').pop().replace('.js', '.min.js')

const jsFiles = entriesRepository.getJsEntryFiles()

let webpackConfigurations = []

jsFiles.forEach((jsFilePath) => {
  console.log(jsFilePath)
  webpackConfigurations.push({
    mode: 'production',
      watch: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    entry: path.join(jsFilePath),
    output: {
      path: path.join(__dirname, '../../', '/static/dist/js'),
      filename: extractFileNameFormated(jsFilePath),
      library: extractLibraryNameFormated(jsFilePath)
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
  })
})

module.exports = webpackConfigurations