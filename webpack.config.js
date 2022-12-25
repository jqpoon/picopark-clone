const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/",
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    // new HtmlWebpackPlugin({
    //   template: "./src/contact.html",
    //   filename: "contact.html",
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //   },
    // }),
  ],
};
