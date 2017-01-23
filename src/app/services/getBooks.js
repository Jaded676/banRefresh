angular
  .module('app')
  .service('getBooks', function($http) {
  var vm = this;
  vm.get = function() {
      return $http.get('app/books.json');  //1. this returns promise

  };
});
