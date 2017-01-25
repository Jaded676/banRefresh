angular
  .module('banchileApp')
  .controller('MainController', function ($scope,$rootScope,$state) {
    var vm = this;
      vm.main = "ABSTRACTA";
      $rootScope.global="estoy en todo lados";

    });
