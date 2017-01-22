angular
  .module('app')
  .controller('BookDetailController', function ($scope,$rootScope,$state,$stateParams) {
    var vm = this;
    alert($stateParams.id);

  });
