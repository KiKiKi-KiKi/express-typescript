const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const BUILD_ROOT = path.join(__dirname, '../dist');
const SRC_ROOT = path.join(__dirname, '../src');
const OUTPUT_FILENAME = 'server.js';

module.exports = {
  context: SRC_ROOT,
  entry: path.resolve('src', 'index.ts'),
  externals: [nodeExternals()],
  output: {
    filename: OUTPUT_FILENAME,
    path: BUILD_ROOT,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  }
};
