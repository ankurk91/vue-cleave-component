'use strict';

const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  context: __dirname,
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
    alias: {
      vue: '@vue/runtime-dom'
    },
    extensions: ['.js', '.json', '.vue']
  },
  entry: {
    'vue-cleave': './src/index.js',
    'vue-cleave.min': './src/index.js',
  },
  externals: {
    'vue': {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    },
    'cleave.js': {
      commonjs: 'cleave.js',
      commonjs2: 'cleave.js',
      amd: 'cleave.js',
      root: 'Cleave'
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'VueCleave',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
          }
        }
      }),
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  devtool: false,
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
    children: false,
    entrypoints: false,
  }
};
