/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])
  
.controller('JamesIndexCtrl', ['$scope', '$location', '$http', 'Jame', function ($scope, $location, $http, Jame) {
    
    $scope.james = Jame.query();
    console.log($scope.james);
    //when we implement current user this should take into account only the James that are not in the users james

    // NEW POST

    $scope.create = function() {
      $http.post('/api/james', $scope.jame)
        .success(function(data){
          $scope.james.unshift(data);
        })
        .error(function(data) {
          alert("there was a problem saving your post");
        });
      // reset post object
    };

    $scope.randJame = function(){
      var numbJames = $scope.james.length; 
      console.log(numbJames);
      var randIndex = Math.floor(Math.random() * (numbJames-1));
      console.log(randIndex);
      var newJame = $scope.james[randIndex];
      console.log(newJame);
      return newJame;
      //When we get currentUser, we can add a relationship to add the jame to the list of current useres james
      //$scope.currentUser.james.push($scope.curJame)
      //$scope.james.splice(randIndex, 1);
      //We should also add a check to make sure that the james doesn't include it, 
    };
    $scope.jame = $scope.randJame();
    console.log($scope.jame)

    $scope.likeJame = function(jame){
      //$scope.currentUser.james.push(jame)
      //$scope.james.splice(randIndex, 1);
      $scope.jame = $scope.randJame();
      console.log($scope.randJame());
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
