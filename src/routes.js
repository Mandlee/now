'use strict';

require('angular-ui-router');

const angular = require('angular');

angular.module('main.routes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    console.log('routes');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'main/views/login.html'
        });
    /*.state('main.home', {
     url: '/home',
     templateUrl: 'view/pages/home.html'
     })
     .state('main.about', {
     url: '/about',
     templateUrl: 'view/pages/about.html'
     });*/
    $urlRouterProvider.otherwise('/main');
}]);