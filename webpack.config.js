const path = require('path');
const nodeExternals = require('webpack-node-externals'); // Exclude node_modules
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const browserConfig = {
  // entry: './src/browser/index.js',
  entry: {
    bundle: './src/browser/index.js',
    light: './src/shared/App.light.sass',
    dark: './src/shared/App.dark.sass'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react'] }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    })
  ]
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
        test: /\.sass$/,
        use: [
          { loader: 'css-loader/locals' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react']}
      }
    ]
  },
  plugins: [
  ]
};

module.exports = [browserConfig, serverConfig];
