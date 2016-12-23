'use strict';

/**
 * A belépő gulp task.
 * Elindítja a serve taskot, ami buildel.
 * Utána figyeli a sass és html fájlokat.
 * Html fájlok alatt a templatekre gondolok pl a direktívákhoz.
 */

const gulp = require('gulp');

const viewsSrc = './src/**/*.html';
const sass = './sass/**/*';

gulp.task('default', ['serve'], function () {
  gulp.watch(sass, ['sass']);
  gulp.watch(viewsSrc, ['views']);
});