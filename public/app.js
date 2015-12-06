/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ui.router',
                         'myApp.controllers'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('user', {
        url: "/",
        templateUrl: 'templates/users-index',
        controller: 'UsersIndexCtrl'
      });

    $urlRouterProvider.otherwise("/state1");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
