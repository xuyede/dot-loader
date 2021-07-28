const path = require('path');
const root = path.join(__dirname, '..');

const config = {
  entry: path.join(root, 'src/index.js'),
  output: {
    filename: '[name].[contentHash:8].js',
    path: path.join(root, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
}

module.exports = {
  config,
  root
};