'use strict';

require('angular-ui-router');

const angular = require('angular');

angular.module('main.routes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'main/views/pages/login.html'
        })
        .state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'main/views/main.html'
        })
        .state('main.home', {
            url: '/home',
            templateUrl: 'main/views/pages/home.html'
        })
        .state('main.article', {
            url: '/news/{id}',
            templateUrl: 'main/views/pages/article.html'
        })
        .state('main.contact', {
            url: '/contact',
            templateUrl: 'main/views/pages/contact.html'
        });
    $urlRouterProvider.otherwise('/login');
}]);