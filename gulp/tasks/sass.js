'use strict';

/**
 * Sass buildelés, és css minimalizálás.
 * Sourcemapekkel
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minCss = require('gulp-clean-css');

gulp.task('sass', () => {
  return gulp.src('./sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(minCss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css/'));
});
