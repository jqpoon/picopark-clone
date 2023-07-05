const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// Common settings
var config = {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

var configGame = Object.assign({}, config, {
  name: "game",
  entry: path.resolve(__dirname, "game", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist", "game"),
    filename: "index.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "game", "index.html"),
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
});

var configPlayer = Object.assign({}, config, {
  name: "player",
  entry: path.resolve(__dirname, "player", "index.js"),
  output: {
    path: path.resolve(__dirname, "player", "index.js"),
    filename: "index.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "player", "index.html"),
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
});

// Build both configs
module.exports = [configGame, configPlayer];
