angular
  .module('app')
  .factory('getBooks', function($http) {
  return {
    get: function() {
      return $http.get('app/books.json');  //1. this returns promise
    }
  };
});
