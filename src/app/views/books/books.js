angular
  .module('app')
  .controller('BooksController', function ($scope,$rootScope,$state,getBooks) {
    var vm = this;
    vm.hello = "hello World";
    getBooks.get().then(function(d) { //2. so you can use .then()
    $scope.data = d;
    console.log($scope.data);
 });


    vm.goToBook = function(bookId){
      $state.go('app.bookDetail',{id: bookId});
    };


  });
