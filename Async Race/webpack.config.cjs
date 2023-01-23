const path = require("path");
const MiniCssPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  mode: "development",
  plugins: [new MiniCssPlugin()],
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
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 3001,
    open: true,
  },
};
