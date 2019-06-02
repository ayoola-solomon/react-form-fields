const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'form-fields.js',
    libraryTarget: 'umd'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.stories\.js$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
