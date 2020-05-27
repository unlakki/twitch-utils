const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    filename: 'twitch-utils.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
};
