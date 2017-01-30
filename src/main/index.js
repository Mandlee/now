'use strict';

/**
 * A modul belépési pontja.
 * Itt deklaráljuk az angular module-t,
 * és itt kötjük össze a szükséges almodulokkal
 * mint direktívák, kontrollerek, komponensek.
 */

const angular = require('angular');

// Az angularos modul deklaráció
const main = angular.module('main', []);

// Controllers
main.controller('MainController', require('./controllers/MainController'));

// Direktíva deklaráció a modulban
main.directive('hello', require('./directives/hello'));

// A nodejs modul kimenete, vagy más nével publikus felülete
// megegyezik az angularok modul nevével. Itt hozzuk össze a két paradigmát
module.exports = 'main';
