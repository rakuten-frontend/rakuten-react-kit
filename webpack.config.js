var path = require('path');
module.exports = {
  
  entry: "./src/app",
  
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  
  resolve: {
    
    root: [
      path.resolve("node_modules"),
      path.resolve("vendor"),
      path.resolve("src"),
    ] ,
      
    extensions:
      ["", ".webpack.js", ".web.js", ".js", ".jsx", ".scss", ".sass" ]

  },

  module: {
    loaders: [
      
      // Babel automatic loading
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: "babel",
        query: {presets: ['react', 'es2015']}
      },
     
      // Sass automatic loading
      {
        test: /\.scss$|\.saas$/,
        loaders: ["style", "css", "sass"]
      },
      
      // Files
      { test: /\.(png|jpg|jpeg|svg|woff|woff2|eot|ttf)$/,
        loader: "file-loader"
      }
      
    ]
    
  }
  
}