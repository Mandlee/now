'use strict';

/**
 * Kitötöljük a build könyvtárat,
 * hogy a build tiszta lappal indulhasson
 */

const gulp = require('gulp');
const del = require('del');

gulp.task('clean', () => del('./build'));
