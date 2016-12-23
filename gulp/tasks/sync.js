'use strict';

/**
 * Browser sync server
 */

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('sync', function () {
  let server = {
    baseDir: './build/',
  };

  browserSync.init({
    server,
    port: 3002,
    files: './build/'
  });
});
