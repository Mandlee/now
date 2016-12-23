'use strict';

/**
 * A fejlesztéshez ezt a taskot használjuk
 * Gyakorlatilag lefuttatja a többi taskot.
 * 
 * A Production módhoz más taskok kellenek majd.
 */

const seq = require('run-sequence');
const gulp = require('gulp');

gulp.task('serve', (done) => {
  seq('clean', 'statics', 'bowercopy', ['sass', 'views'], 'scripts', 'sync', done);
});
