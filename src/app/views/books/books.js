angular
  .module('app')
  .controller('BooksController', function ($scope,$rootScope,$state) {
    var vm = this;
    vm.hello = "hello World";
    vm.books = ["Libros","Libros2","Libros3"];
    
  });
