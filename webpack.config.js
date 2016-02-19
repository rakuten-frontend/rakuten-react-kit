var path = require('path');
module.exports = {
  
  entry: "./src/app",
  
  output: {
    path: "./build",
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  
  resolve: {
    
    root: [path.resolve("node_modules"), path.resolve("vendor")] ,
      
    extensions:
      ["", ".webpack.js", ".web.js", ".js", ".jsx" ]

  },

  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel",
        query: {presets: ['react', 'es2015']}}
    ]
    
  }
  
}