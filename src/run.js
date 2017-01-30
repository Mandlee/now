'use strict';

const angular = require('angular');

angular.module('App')
    .run(['$rootScope', function ($rootScope) {
        console.log("%cNow", "color: #f96233; font-size: x-large");
    }]);
