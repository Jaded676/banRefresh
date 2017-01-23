angular
  .module('app')
  .service('bookService', function() {
   var vm = this;
   vm.book = "";
    vm.getBook = function() {
      return vm.book;
  };

    vm.setBook = function(book) {
      vm.book = book;
  };


});
