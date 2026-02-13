const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emit
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false, // Keep console logs, set to true to remove them
          },
          format: {
            comments: false, // Remove comments
          },
        },
        extractComments: false,
      }),
    ],
  },
  devtool: 'source-map', // Generate source maps for debugging
};
