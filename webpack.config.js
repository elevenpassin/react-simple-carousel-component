const { resolve } = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  externals: ["react", "styled-components", "prop-types"]
}