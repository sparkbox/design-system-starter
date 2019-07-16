const path = require('path');
const webpack = require('webpack');
const IgnorePlugin = 'IgnorePlugin';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  mode: PRODUCTION ? 'production' : 'development',
  entry: {
    scripts: './src/js/index.js',
    'design-system-interface': './src/js/design-system-interface.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new webpack.IgnorePlugin({ resourceRegExp: /jquery$/ })],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
