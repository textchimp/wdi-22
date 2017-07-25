const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: ['./app/index.js'],      // where to start

  output: {     // where to end
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {      // how to get there
    loaders: [{
      exclude: /node_modules/, // ignore the modules tree
      loader: 'babel-loader',  // use this tranformation loader
      test: /\.jsx?$/          // process all .js or .jsx files
    }]
  },

  plugins: [ HTMLWebpackPluginConfig ]    // extra stuff

};
