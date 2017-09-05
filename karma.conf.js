const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [],
    singleRun: false,
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'src/**/*.test.js',
      'src/**/*.css_test.js',
      { pattern: 'src/**/*.sass', included: false },
      { pattern: 'dist/css/main.css', included: false }
    ],
    preprocessors: {
      'src/**/*.test.js': [ 'webpack', 'sourcemap' ],
      'src/**/*.css_test.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        rules: [
          {
            test: /(\.jpg|\.jpeg|\.gif|\.png|\.svg|\.css|\.less|\.scss|\.sass)$/,
            loader: 'null-loader' // mocha won't understand those filetypes
          },
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: { presets: ['es2015', 'react'] }
          }
        ]
      },
      externals: {
        'react/addons': true, // AVOID Module not found: Error
        'react/lib/ExecutionEnvironment': true, // AVOID Module not found: Error
        'react/lib/ReactContext': true // AVOID Module not found: Error
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
