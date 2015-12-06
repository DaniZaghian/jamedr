angular.module('myApp').factory('Jame', function($resource) {
   return $resource('/api/james/:id', { id: '@_id' }, {
     update: {
       method: 'PUT' // this method issues a PUT request
     }
   });
 });