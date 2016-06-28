var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');
//var browserSync = require('browser-sync').create();

//gulp.task('browserSync', function() {
//  browserSync.init({
//    server: {
//      baseDir: 'source'
//    },
//  })
//})

gulp.task('useref', function(){
  return gulp.src('source/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify().on('error', gutil.log)))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});
