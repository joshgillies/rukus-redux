var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: path.resolve(__dirname, 'src', 'index.js'),
        loader: 'rukus?["./src/components"]'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
