/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractStyles = new ExtractTextPlugin('style.css');
module.exports = {

  entry: "./src/main",
  cache: true,

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: "bundle.js"
  },

  resolve: {

    modules: [
      path.resolve("node_modules"),
      path.resolve("src")
    ] ,

    extensions:
      [".webpack.js", ".web.js", ".js", ".jsx", ".scss", ".sass" ]

  },

  devServer: {
    quiet: false,
    historyApiFallback: {
      index: "index.html"
    }
  },

  plugins: [extractStyles],
  module: {
    rules: [
      // ESLint checking
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },

      // Babel automatic loading
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true
        }
      },

      // CSS automatic loading
      {
        test: /\.css$/,
        use: extractStyles.extract(['css-loader'])
      },

      // Sass automatic loading
      {
        test: /\.scss$|\.saas$/,
        use: extractStyles.extract(['css-loader', 'sass-loader'])
      },

      // Files
      { test: /\.(png|jpg|jpeg|svg|woff|woff2|eot|ttf)$/,
        use: "file-loader"
      }

    ]

  }
};
