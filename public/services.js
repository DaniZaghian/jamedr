angular.module('myApp.services', [])

.factory('Jame', function($resource) {
   return $resource('/api/james/:id', { id: '@_id' }, {
     update: {
       method: 'PUT' // this method issues a PUT request
     }
   });
 })


  .factory('Auth', ['$auth', function ($auth) {
    return {
      currentUser: function() {
        var user = $auth.getPayload();
        var currentUser = {
          _id: user.sub,
          email: user.email
        };
        return currentUser;
      }
    };
  }]);