const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const path = require("path");
const { spawn } = require('node:child_process')

// Common settings
var config = {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  resolve: {
    fallback: {
      fs: false,
      net: false,
      async_hooks: false,
    },
  },

  // Makes output files smaller
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserWebpackPlugin(),
  //   ],
  // },

  // Fixes critical dependency issue
  externals: {
    express: `require('express')`,
  },
};

var configGame = Object.assign({}, config, {
  name: "game",
  entry: path.resolve(__dirname, "game", "server.ts"),
  output: {
    path: path.resolve(__dirname, "dist", "game"),
    filename: "server.js",
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
    new NodePolyfillPlugin(),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
          const command = spawn('npm', ["run", "run:dev"]);
          command.stdout.on('data', output => {
            console.log(output.toString())
        })
        });
      },
    },
  ],
});

var configPlayer = Object.assign({}, config, {
  name: "player",
  entry: path.resolve(__dirname, "player", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist", "player"),
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
module.exports = [configGame];
