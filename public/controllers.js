/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])

  //POSTS
  .controller('UsersIndexCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    // GET POSTS
    // make a GET request for all posts with $http
    // $scope.posts = [{content: "blah"},
                    // {content: "a new post"}]

    $http.get('/api/users')
      .success(function(response) {
        console.log(response)
        $scope.users = response;
      })
      .error(function(response) {
        console.log(response)
      })

    // NEW POST
    // create an empty 'post' object within the scope


    // CREATE A POST    
    $scope.create = function() {
      // make a POST request to create the post with $http
      // sned the scope's post object as data

      // reset scope's post object
      
    };


    // DELETE A POST
    $scope.delete = function(post) {
      // make a DELETE request for this post

    };


  }]);
