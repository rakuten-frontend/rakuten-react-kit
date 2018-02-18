const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: './src/main.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: "bundle.js" },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src'] 
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ]
  },

  plugins: [
    new DashboardPlugin()
  ]

};
