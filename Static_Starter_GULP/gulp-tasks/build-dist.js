'use strict'

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin')
var rename = require('gulp-rename');
var del = require('del');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');

var paths = gulp.paths;
var pkg = gulp.pkg;

gulp.vendors = require('./../vendors.json');
var vendors = gulp.vendors;

gulp.task('copy:vendorsCSS', function() {
  return gulp.src(vendors.css)
  .pipe(gulp.dest(paths.vendors + 'css/'));
});

gulp.task('minify:vendorsCSS', function() {
  return gulp.src([
    paths.vendors + 'css/*.css',
    '!' + paths.vendors + 'css/*.min.css'
  ])
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(paths.vendors + 'css/'));
});

gulp.task('clean:vendorsCSS', function () {
    return del([
      paths.vendors + 'css/*.css',
      '!' + paths.vendors + 'css/*.min.css'
    ]);
});

gulp.task('vendors:css', function(callback) {
    runSequence('copy:vendorsCSS', 'minify:vendorsCSS', 'clean:vendorsCSS', callback);
});

gulp.task('copy:vendorsJS', function() {
  return gulp.src(vendors.js)
  .pipe(gulp.dest(paths.vendors + 'js/'));
});

gulp.task('minify:vendorsJS', function() {
  return gulp.src([
    paths.vendors + 'js/*.js',
    '!' + paths.vendors + 'js/*.min.js'
  ])
  .pipe(gulp.dest(paths.vendors + 'js/'))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(paths.vendors+'js/'));
});

gulp.task('clean:vendorsJS', function () {
    return del([
      paths.vendors + 'js/*.js',
      '!' + paths.vendors + 'js/*.min.js']);
});

gulp.task('vendors:js', function(callback) {
    runSequence('copy:vendorsJS', 'minify:vendorsJS', 'clean:vendorsJS', callback);
});

gulp.task('copy:vendorsFonts', function() {
  return gulp.src(vendors.fonts)
  .pipe(gulp.dest(paths.vendors + 'fonts/'));
});

gulp.task('copy:vendorsFlags', function() {
  return gulp.src(vendors.flags)
  .pipe(gulp.dest(paths.vendors + 'flags/'));
});

gulp.task('replace:node_modules', function(){
  return gulp.src([
      paths.dist + '**/*.html',
      paths.dist + '**/*.js',
    ], {base: './'})
    .pipe(replace(/node_modules+.+(\/[a-z0-9][^/]*\.js+(\'|\"))/ig, 'vendors/js$1'))
    .pipe(replace(/"vendors\/js\/(.*).js(\'|\")/ig, '"vendors/js/$1.min.js"'))
    .pipe(replace(/"..\/..\/vendors\/js\/(.*).js(\'|\")/ig, '"../../vendors/js/$1.min.js"'))
    .pipe(replace('.min.min.js', '.min.js'))
    .pipe(replace(/node_modules+.+(\/[a-z0-9][^/]*\.css+(\'|\"))/ig, 'vendors/css$1'))
    .pipe(replace(/"vendors\/css\/(.*).css(\'|\")/ig, '"vendors/css/$1.min.css"'))
    .pipe(replace(/"..\/..\/vendors\/css\/(.*).css(\'|\")/ig, '"../../vendors/css/$1.min.css"'))
    .pipe(replace('.min.min.css', '.min.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('vendors', function(callback) {
    runSequence('vendors:css', 'vendors:js', 'copy:vendorsFonts', 'copy:vendorsFlags', 'replace:node_modules', callback);
});

gulp.task('clean:dist', function () {
    return del(paths.dist);
});

gulp.task('copy:css', function() {
   return gulp.src(paths.src + 'css/**/*')
   .pipe(gulp.dest(paths.dist + 'css'));
});

gulp.task('copy:img', function() {
   return gulp.src(paths.src + 'img/**/*')
   .pipe(gulp.dest(paths.dist + 'img'));
});

gulp.task('copy:js', function() {
   return gulp.src(paths.src + 'js/**/*')
   .pipe(gulp.dest(paths.dist + 'js'));
});

gulp.task('copy:views', function() {
   return gulp.src(paths.src + 'views/**/*')
   .pipe(gulp.dest(paths.dist + 'views'));
});

gulp.task('copy:html', function() {
  var framework = pkg.name.split('/')[1];
  if (framework == 'ajax') {
    return gulp.src(paths.src + 'index.html')
    .pipe(gulp.dest(paths.dist));
  } else {
    return gulp.src(paths.src + '**/*.html')
   .pipe(gulp.dest(paths.dist));
  }
});

gulp.task('copy:vendors', function() {
   return gulp.src(paths.src + 'vendors/**/*')
   .pipe(gulp.dest(paths.dist + 'vendors/'));
});

gulp.task('build:dist', function(callback) {
    runSequence('clean:dist', 'copy:css', 'copy:img', 'copy:js', 'copy:views', 'copy:html', 'copy:vendors', 'vendors', callback);
});
