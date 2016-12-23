'use strict';

/**
 * A fejlesztéshez elég lesz csak átmásolni az összes
 * statikis fájlt a build könyvtárba.
 * Productionben használjuk a usemin modult.
 */

const gulp = require('gulp');

gulp.task('statics', () => {
  gulp.src('./static/**/*')
    .pipe(gulp.dest('./build/'))
});
