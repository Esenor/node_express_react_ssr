const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')
const entriesRepository = require('./entriesRepository')

const extractLibraryNameFormated = path => path.split('/').pop().replace('.js', '')
const extractFileNameFormated = path => path.split('/').pop().replace('.js', '.min.js')

const jsFiles = entriesRepository.getJsEntryFiles()
const scssFiles = entriesRepository.getScssEntryFiles()

const mode = 'production'
const watch = true

let webpackConfigurations = []

jsFiles.forEach((jsFilePath) => {
  console.log(jsFilePath)
  webpackConfigurations.push({
    mode,
    watch,
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
    }
  })
})

const webpackScssConfiguration = scssFiles.reduce((styleConfigurations, styleFileName) => {
  console.log(styleFileName)
  let sheetFileName = styleFileName.split('/').pop()
  let distributedBundleFolder = path.join(__dirname, '../../', '/static/dist/css')
  styleConfigurations.push({
    mode,
    watch,
    entry: {
      styles: styleFileName
    },
    output: {
      path: distributedBundleFolder,
      filename: '__css_side_effect.js'
    },
    module: {
      rules: [{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: sheetFileName.replace('.scss', '.min.css'),
        chunkFilename: sheetFileName.replace('.scss', '.[id].css')
      }),
      new RemovePlugin({
        after: {
          test: [{
            folder: distributedBundleFolder,
            method: (filePath) => {
              return new RegExp(/\.js$/, 'm').test(filePath)
            }
          }]
        }
      })
    ]
  })
  return styleConfigurations
}, [])

module.exports = [...webpackConfigurations, ...webpackScssConfiguration]