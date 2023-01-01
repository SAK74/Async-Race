const path = require("path");
const MiniCssPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
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
    ],
  },
};
