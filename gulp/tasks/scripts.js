'use strict';

/**
 * Kölcsönzött implementáció,
 * mivel nem kell akkora komplexitás.
 * 
 * https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
 */

const gulp = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');

/**
 * Alap beállítások.
 * Belépési pontok, és a debug mód.
 * A debug a sourcemapok miatt kell.
 */
const userOptions = {
  entries: ['./index.js'],
  debug: true
}

const options = Object.assign({}, watchify.arg, userOptions);

// Ez az objektum felelős a buildért
const bundler = watchify(browserify(options));

// Es6 - Es5 transpiler
bundler.transform(babelify);

// Ez a függvény lesz maga a gulp task
const bundle = () => {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/js/'));
}

// Ha frissül a kód, akkor fusson le újra a build
bundler.on('update', bundle);
bundler.on('log', gutil.log.bind(gutil, 'Bundle updated'));

gulp.task('scripts', bundle);
