const path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
entry: [
  './client/src/index.js'
],
 plugins: [
    new CompressionPlugin({
}),

  ],
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name (file) {
              /*if (env === 'development') {
                return '[path][name].[ext]'
            }*/
              return '[name]_[hash].[ext]'
            },
            publicPath: '/assets/images/',
            outputPath: '../images/'
          }  
        }
      ]
    }
  ]
},
resolve: {
  extensions: ['*', '.js', '.jsx']
},
output: {
  path: path.join(__dirname, '/client/dist'),
  publicPath: '/',
  filename: 'bundle.js'
}
};
