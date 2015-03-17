var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var del = require('del');
var open = require("open");
var connect = require('gulp-connect');

var webpackConfig = {
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

gulp.task('js', function() {
  return gulp.src([
    'src/js/main.jsx',
    'src/js/second.js',
    'src/js/first.js'
    ])
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('clean', function(cb) {
  del('dist', cb);
});

gulp.task('html', function(){
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('connect', ['build'], function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  open('http://localhost:8080');
});

gulp.task('build', ['html', 'js']);

gulp.task('default', ['open']);
