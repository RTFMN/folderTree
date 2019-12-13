const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // liveReload: true,
    compress: true,
    port: 9000,
    // hot: false,
  }
}