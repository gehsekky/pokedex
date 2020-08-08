'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  // context: path.join(__dirname, '../'),
  entry: [
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist/')
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], include: /src/, exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/i, loader:'file-loader'},
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
    ]
  },
  plugins: [

  ]
};