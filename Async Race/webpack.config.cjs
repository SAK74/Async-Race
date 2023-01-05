const path = require("path");
const MiniCssPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build/Async-Race"),
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
        test: /.wav$/,
        type: "asset/resource",
      },
    ],
  },
  // watch: true,
  devServer: {
    static: {
      directory: path.join(__dirname, "build/Async-Race"),
    },
    compress: true,
    // host: "localhost",
    port: 3001,
  },
};
