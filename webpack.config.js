const path = require('path');
const nodeExternals = require('webpack-node-externals'); // Exclude node_modules
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: "dist/img/[name].[ext]",
          publicPath: url => url.replace(/dist/, "")
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' }
          ]
        })
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [autoprefixer('last 4 versions', 'ie 9')]
                }
              }
            },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
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
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: "dist/img/[name].[ext]",
          publicPath: url => url.replace(/dist/, ""),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'css-loader/locals' }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'css-loader/locals' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [autoprefixer('last 4 versions', 'ie 9')]
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react']}
      }
    ]
  },
  plugins: [
  ]
};

module.exports = [browserConfig, serverConfig];
