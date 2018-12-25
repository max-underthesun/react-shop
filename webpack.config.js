const path = require('path');

module.exports = {
  entry: './src/index.js',

  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // contentBase: [
    //   path.join(__dirname, 'public'),
    //   path.join(__dirname, 'static')
    // ],
    compress: true,
    port: 9000,
    historyApiFallback: true
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ]
  }
};
