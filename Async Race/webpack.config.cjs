const path = require("path");
const MiniCssPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  mode: "development",
  plugins: [
    new MiniCssPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
      favicon: path.resolve(__dirname, "public/car.svg"),
    }),
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssPlugin.loader, "css-loader"],
      },
      { test: /.html$/, loader: "html-loader" },
      {
        test: /.(wav|png)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3001,
    open: true,
  },
};
