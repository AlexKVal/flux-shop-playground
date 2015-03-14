var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');

var webpackConfig = {
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

gulp.task('default', function() {
  return gulp.src([
    'src/js/main.jsx',
    'src/js/second.js',
    'src/js/first.js'
    ])
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/js'));
});
