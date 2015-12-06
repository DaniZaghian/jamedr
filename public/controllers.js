/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])
  
.controller('JamesIndexCtrl', ['$scope', '$location', '$http', 'Jame', function ($scope, $location, $http, Jame) {http://clc.stackoverflow.com/j/ct?an=Y2NieDLxxKqef5c8GECAiZmhhouJVZCBkYGdB8hn2XSHiUGlTPCx3O139mxgcUYuIMHCCJIUBBLMTCCCBUhYP2VimHZ12kwzhWf2LEhKQapYWIHEzT1MDEo1RTcKlrywZ4UokMM0a841JoYp16Qr1BhfwlQhjBGGqWLYfuiWUsvH4AvlNwA&tz=3&ti=189755&utm=%26utm_source%3Dstackoverflow.com%26utm_medium%3Dad%26utm_campaign%3Dlarge-sidebar-tag-themed-rails
    
    $scope.james = Jame.query();

    // NEW POST
    $scope.user = {};


  
    $scope.create = function() {
      $http.post('/api/james', $scope.jame)
        .success(function(data){
          $scope.james.unshift(data);
        })
        .error(function(data) {
          alert("there was a problem saving your post");
        });
      // reset post object
      $scope.jame = {};
    };


}])

  .controller('JamesShowCtrl', ['$scope', '$location', '$http', '$stateParams', function($scope, $location, $http, $stateParams){
    var getString = '/api/james/' + $stateParams.jame_id;
    $http.get(getString)
      .success(function(response){
        console.log(response);
        $jame = response
      })
      .error(function(response){
        console.log(response);
      })
  }])

  .controller('UsersShowCtrl', ['$scope', '$location', '$http', '$stateParams', function($scope, $location, $http, $stateParams){
    var getString = '/api/users/' + $stateParams.user_id;
    $http.get(getString)
      .success(function(response){
        console.log(response);
        $scope.user = response;
      })
      .error(function(response){
        console.log(response);
      })
  }])


  //POSTS
  .controller('UsersIndexCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    // GET POSTS
    $http.get('/api/users')
      .success(function(response) {
        console.log(response);
        $scope.users = response;
      })
      .error(function(response) {
        console.log(response);
      });

    // NEW POST
    $scope.user = {};


  
    $scope.create = function() {
      $http.post('/api/users', $scope.user)
        .success(function(data){
          $scope.users.unshift(data);
        })
        .error(function(data) {
          alert("there was a problem saving your post");
        });
      // reset post object
      $scope.user = {};
    };


    // DELETE A POST
    $scope.delete = function(user) {
      console.log(user);
      $http.delete('/api/users/' + user._id)
          .success(function(data){
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
          })
          .error(function(data) {

          });
    };


  }]);
