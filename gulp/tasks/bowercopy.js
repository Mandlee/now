'use strict';

/**
 * Bower komponensek másolása
 */

const gulp = require('gulp');

gulp.task('bowercopy', () => {
    gulp.src('./bower_components/**/*')
        .pipe(gulp.dest('./build/bower_components/'))
});
