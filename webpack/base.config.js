const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const BUILD_ROOT = path.join(__dirname, '../dist');
const SRC_ROOT = path.join(__dirname, '../src');
const OUTPUT_FILENAME = 'server.js';

const enviroment = process.env.NODE_ENV || 'dev';

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
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `../.env/.env.${enviroment}`),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
