const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./client/index.html",
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
