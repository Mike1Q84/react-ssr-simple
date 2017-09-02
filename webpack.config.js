const path = require('path');
// const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals'); // Exclude node_modules
// const Uglify = require('uglifyjs-webpack-plugin'); // Uglify ES6 support

const browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react'] }
      }
    ]
  }
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()], // AVOID WARNING in ./node_modules/express/lib/view.js
  // Critical dependency: the request of a dependency is an expression
  output: {
    path: __dirname,
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react']}
      }
    ]
  },
  plugins: [
    // new Uglify() // AVOID ERROR in server.js from UglifyJs Invalid assignment
    // Uglify DOES NOT support ES6 at the moment
  ]
};

module.exports = [browserConfig, serverConfig];
