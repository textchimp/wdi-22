const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {

  entry: [  // Our app code which needs to be transformed/built
    './app/index.js'
  ],

  output: { // The destination for our transformed/built code, ready to publish
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {      // The loaders we want webpack to use in the build process
    loaders: [{
      exclude: /node_modules/,  // Ignore the modules folder tree
      test: /\.jsx?$/,   // If the file ends in .js or .jsx, then...
      loader: 'babel-loader'
    }]
  },

  plugins: [   // Extra packages we need to do some work for us
    HTMLWebpackPluginConfig
  ]
}
