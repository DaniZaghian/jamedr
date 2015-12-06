/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ui.router',
                         'myApp.controllers'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('user', {
        url: "/users",
        templateUrl: 'templates/users-index',
        controller: 'UsersIndexCtrl'
      })

      .state('jame', {
        url: "/james",
        templateUrl: 'templates/james-index',
        controller: 'JamesIndexCtrl'

      });

    $urlRouterProvider.otherwise("/state1");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
