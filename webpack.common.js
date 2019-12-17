const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylishReporter = require('webpack-stylish');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  stats: 'minimal',
  entry: {
    'js/scripts': './src/js/index.js',
    'js/design-system-interface': './src/js/design-system-interface.js',
    'css/base': './src/scss/base.scss',
    'css/design-system-interface': './src/scss/design-system-interface.scss',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { sourceMap: !PRODUCTION }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: !PRODUCTION }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !PRODUCTION,
              sassOptions: {
                outputStyle: PRODUCTION ? 'compressed' : 'expanded'
              }
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /jquery$/ }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new StylishReporter()
  ],
};
