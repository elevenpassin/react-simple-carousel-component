const { resolve } = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  externals: ["react", "styled-components"]
}