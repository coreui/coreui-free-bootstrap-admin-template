'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin')
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

require('require-dir')('./gulp-tasks');

gulp.paths = {
  dist: 'dist',
  vendors: 'dist/vendors'
};

var paths = gulp.paths;

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);

});

// Static Server without watching scss files
gulp.task('serve:lite', function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch('**/*.css').on('change', browserSync.reload);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);

});

gulp.task('sass', ['compile-vendors'], function() {
  return gulp.src('./scss/style.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./css'))
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});

gulp.task('sass:watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['serve']);
