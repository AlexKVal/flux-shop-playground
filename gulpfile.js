var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    shell = require('gulp-shell'),
    connect = require('gulp-connect'),
    del = require('del');

gulp.task('browserify', function () {
  return gulp.src('src/js/main.js')
  .pipe(browserify({transform: 'reactify'}))
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('compile', ['browserify', 'copy']);

gulp.task('connect', ['compile'], function() {
  connect.server({ root: 'dist', livereload: true });
});

gulp.task('open_site', ['connect'], shell.task([
  'open http://localhost:8080'
]));

gulp.task('reload', ['compile'], function () {
  gulp.src('dist/*.html')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['reload']);
});

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('default', ['open_site', 'watch']);
