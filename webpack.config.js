'use strict';

const path = require('path');

function jsBabelLoader (presets = [], test = /\.js$/) {
  return {
    loader: 'babel-loader?cacheDirectory=true',
    options: {
      plugins: [
        'transform-object-rest-spread',
        'transform-class-properties',
      ],
      presets: [['es2015', { modules: false }], 'latest'].concat(presets),
    },
    test,
    include: [
      path.resolve(__dirname, 'client/js'),
    ],
  };
}

module.exports = {
  entry: {
    main: ['./client/js/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build/js/'),
    publicPath: '/js/',
    filename: 'js/index.js',
  },
  module: {
    rules: [
      jsBabelLoader(),
      jsBabelLoader(['react'], /\.jsx$/),
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      '~': path.join(__dirname, 'client', 'js'),
    },
  }
};
