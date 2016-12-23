'use strict';

/**
 * Az angular templateket rakja össze,
 * a nézet fájlokból.
 */

const gulp = require('gulp');
const views = require('gulp-angular-templatecache');

gulp.task('views', function(){
  return gulp.src('./src/**/*.html')
    .pipe(views({
      standalone: true
    }))
    .pipe(gulp.dest('./build/js/'));
});
