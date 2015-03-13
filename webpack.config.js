module.exports = {
  entry: './src/js/main.jsx',
  output: { filename: 'dist/js/main.js' },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.js$/, loader: 'envify-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
