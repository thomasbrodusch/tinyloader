/**
 * Config for WebPack
 */
var webpack = require("webpack");

module.exports = {

	entry: ['./src/tinyloader.js'],
	output: {
    path        : __dirname + '/dist',
    filename    : 'tinyloader.min.js',
    library     : 'tinyloader',
    libraryTarget : 'umd',
    umdNamedDefine : true
  },
    
  devtool: 'source-map',

  resolve: {
    extensions: [
      '', 
      '.min.js', 
      '.js', 
    ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /(node_modules|dist)/
      }
    ]
  },
}
