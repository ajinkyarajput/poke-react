const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./PokeDetails/PokeMon.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"], modules: [path.join(__dirname, 'public'), 'node_modules'], },
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "public",
    port: 3000,
    host: "0.0.0.0"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: 'index.html',
      to: 'index.html'
    }])
  ]
};
