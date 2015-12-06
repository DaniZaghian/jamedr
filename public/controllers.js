/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])
  .controller('GifsCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('http://api.giphy.com/v1/gifs/search?q=kitten&api_key=dc6zaTOxFJmzC ')
    .success(function(response){
      console.log(response.data);
      $scope.gifs = response.data;
    })
    .error(function(response){
      console.log('Error: ', response);
    });

    $scope.searchGifs = function(){
      console.log($scope.term);
      $http.get('http://api.giphy.com/v1/gifs/search?q=' + $scope.term + '&api_key=dc6zaTOxFJmzC ')
      .success(function(response){
        console.log(response.data);
        $scope.gifs = response.data;
      })
      .error(function(response){
        console.log('Error: ', response);
      });
      };

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
      $http.delete('/api/users/' + user._id)
          .success(function(data){
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
          })
          .error(function(data) {

          });
    };


  }]);
