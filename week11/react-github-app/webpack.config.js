const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {

  entry: [ './app/index.js' ],

  module: {
    loaders: [
      {
        exclude: /node_modules/ ,
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },

  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },

  plugins: [
    HTMLWebpackPluginConfig
  ]

}
