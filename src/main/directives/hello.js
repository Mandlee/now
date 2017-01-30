'use strict';

/**
 * Példa direktíva
 * Csak megjelenít egy üzenetet ami átadunk
 */

const hello = () => {
  return {
    restrict: 'AEC',
    templateUrl: 'main/views/hello.html',
    scope: {
      hello: '@'
    }
  }
};

module.exports = hello;
