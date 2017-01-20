angular
  .module('app')
  .controller('BooksController', function ($scope,$rootScope,$state) {
    var vm = this;
    vm.hello = "hello World";
    $scope.books = [{titulo: "Libro1",
                 urlFoto: "http://lorempixel.com/g/200/300/",
                 id:1},
                {titulo: "Libro2",
                  urlFoto: "http://lorempixel.com/g/200/300/",
                  id:2},
                {titulo: "Libro3",
                  urlFoto: "http://lorempixel.com/g/200/300/",
                  id:3}];

    $scope.goToBook = function(bookId){
      $state.go('app.bookDetail',{id: bookId});
    };

  });
