const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", // Set the mode to development
  entry: "./src/index.js", // Entry point for the application
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the output directory before emitnpm
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Template HTML file
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Loaders for CSS files
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};