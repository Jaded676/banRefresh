angular
  .module('app')
  .controller('LoginController', function ($scope,$rootScope,$state) {
    var vm = this;
      vm.main = "ABSTRACTA";
    //  $rootScope.global="estoy en todo lados";
      $scope.ir_a = function() {
        // alert("test");
        $state.go('app.bienvenidos');
      }
    });
