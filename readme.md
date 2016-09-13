# Rakuten React kit

The starter kit for React applications from Rakuten.

## Structure
```
/
├── build/                   
│   ├──   index.html
│   └──   bundle.js          : Application bundle
│
├── node_modules/            : Node dependencies
│
├── src/
│   ├── components/          : Application Components
│   ├── domain/              : Business Logic
│   │    ├── Middleware/     : Actors who dispatch the actions
│   │    └── Store/        
│   │         ├── actions/   
│   │         ├── reducers/   
│   │         └── state/  
│   │
│   ├── style/               : Global Styles
│   └── main.jsx             : Application Entry Point
│
│
├── .gitignore               
├── .flowconfig              
├── .css.js.flow             
├── package.json             
├── readme.md                
└── webpack.config.js        : Webpack config file
```

## Setup

### 1. Install Node.js

Download from the Node.js [official site](https://nodejs.org/en/), or use your prefered package management software.

### 2. Install Webpack

```
npm install -g webpack webpack-dev-server
```

### 3.  Install Node dependencies

```
npm install
```


## Development

Run server with HMR (Hot Module Replacement) at [localhost:9090](http://localhost:9090)

```
npm start
```
See more about Hot Module Replacement [here](https://webpack.github.io/docs/hot-module-replacement.html)

## Production

Create minified bundle for deployment in the `build` directory

```
npm build
```

## Disclaimer
This is an experimental project. Use it in production with caution.

## License

Copyright (c) 2016 Rakuten, Inc. Licensed under the MIT License.
