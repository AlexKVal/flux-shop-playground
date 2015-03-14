module.exports = {
  // watch: true,
  entry: './src/js/main.jsx',
  output: {
    path: "dist",
    // publicPath: "/",
    filename: 'js/main.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' } //,
      // { test: /\.js$/, loader: 'envify-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
