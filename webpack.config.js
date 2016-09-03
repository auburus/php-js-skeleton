var path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ["./app/main.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.twig$/,
        loader: 'twig'
      },
      {
        test: /\.jpg$/,
        loader: 'file'
      },
      {
        test: /\.png$/,
        loader: 'file?mimetype=image/png'
      },
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./app/sass")
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'app/templates/index.html.twig'
    })
  ],
  node: {
    fs: 'empty' //avoids error messages (at least this says twig-loader docs
  }
};
