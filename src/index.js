'use strict';

/**
 * Fő modul.
 * Itt deklaráljuk a fő modult, majd
 * dependencyként határozzuk meg a többit
 */

const angular = require('angular');

// Fontos hogy ez csak a main modul neve
// Amint az angular.module meg van hívva
// Onnantől elérhető az angularnak pusztán a nevével
const main = require('./main');

angular.module('App', [
  'templates',
  main
]);

//Ennek a modulnak már nem kell exportálnia semmit
window.angular = angular;