const path = require('path');
const merge = require('webpack-merge').default;
const HTmlPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { config, root } = require('./webpack.config.base');

const devServerConfig = {
  https: false,
  host: '127.0.0.1',
  port: '12306'
}

const devServer = {
  contentBase: path.join(root, 'dist'),
  overlay: true,
  quiet: true,
  port: devServerConfig.port
}

const devConfig = merge(config, {
  mode: 'development',
  devServer,
  module: {
    rules: [
      {
        test: /\.dot$/,
        use: [
          {
            loader: path.join(root, 'loader/dot.js'),
            options: {
              htmlResourceRoot: './'
            }
          }
        ]          
      }
    ]
  },
  plugins: [
    new HTmlPlugin({
      template: path.resolve(root, 'page/index.html'),
      filename: 'index.html'
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${
          devServerConfig.https ? "https" : "http"
          }://${devServerConfig.host}:${devServerConfig.port}`,
        ],
      },
      clearConsole: true,
    })
  ],
})

module.exports = devConfig;