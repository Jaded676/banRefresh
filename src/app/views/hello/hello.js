angular
  .module('app')
  .controller('HelloController', function ($scope,$rootScope,$state) {
    var vm = this;
    vm.hello = "ABSTRACTA";
    $rootScope.global="estoy en todo lados";

  });
