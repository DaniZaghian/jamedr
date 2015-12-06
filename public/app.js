/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ui.router',
                         'myApp.controllers'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

      .state('landing', {
        url: "/",
        templateUrl: 'templates/landing-page',
      })

      .state('user', {
        url: "/users",
        templateUrl: 'templates/users-index',
        controller: 'UsersIndexCtrl'
      })

      .state('userShow', {
        url: "/users/:user_id",
        templateUrl: 'templates/users-show',
        controller: "UsersShowCtrl"
      })

      .state('jame', {
        url: "/james",
        templateUrl: 'templates/james-index',
        controller: 'JamesIndexCtrl'

      })

      .state('jameShow', {
        url: "/james/jame_id",
        templateUrl: 'templates/james-show',
        controller: 'JamesShowCtrl'
      });

    $urlRouterProvider.otherwise("/state1");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
