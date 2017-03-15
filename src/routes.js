angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

    .state('app', {
      url: '/',
      abstract: true,
      templateUrl: 'app/views/main/main.html',
      controller: 'MainController as ctrlMain'
    })

    .state('app.login', {
      url: 'login',
      views: {
        'mainView': {
          templateUrl: 'app/views/login/login.html',
          controller: 'LoginController as ctrlLogin'
        }
      }
    })
      .state('app.bienvenidos', {
        url: 'bienvenidos',
        views: {
          'mainView': {
            templateUrl: 'app/views/bienvenidos/bienvenidos.html',
            controller: 'BienvenidosController as ctrlBienvenidos'
          }
        }
      })

      .state('app.actualizacion', {
        url: 'actualizacion',
        views: {
          'mainView': {
            templateUrl: 'app/views/actualizacion/actualizacion.html',
            controller: 'ActualizacionController as ctrlActualizacion'
          }
        }
      })

      .state('app.consultar', {
        url: 'consultar/',
        abstract: true,
        views: {
          'mainView': {
            templateUrl: 'app/views/consultar/consultar.html',
            controller: 'ConsultarController as ctrlConsultar'
          }
        }
      })

      .state('app.consultar.resumen', {
        url: 'consultar/resumen',
        views: {
          'consultarView': {
            templateUrl: 'app/views/resumen/resumen.html',
            controller: 'ResumenController as ctrlResumen'
          }
        }
      })

      .state('app.consultar.patrimonio', {
        url: 'patrimonio',
        views: {
          'consultarView': {
            templateUrl: 'app/views/patrimonio/patrimonio.html',
            controller: 'PatrimonioController as ctrlPatrimonio'
          }
        }
      })

      .state('app.consultar.autorizaciones', {
        url: 'autorizaciones',
        views: {
          'consultarView': {
            templateUrl: 'app/views/autorizaciones/autorizaciones.html',
            controller: 'AutorizacionesController as ctrlAutorizaciones'
          }
        }
      })

      .state('app.consultar.movimientos', {
        url: 'movimientos',
        views: {
          'consultarView': {
            templateUrl: 'app/views/movimientos/movimientos.html',
            controller: 'MovimientosController as ctrlMovimientos'
          }
        }
      })

      .state('app.consultar.documentos', {
        url: 'documentos',
        views: {
          'consultarView': {
            templateUrl: 'app/views/documentos/documentos.html',
            controller: 'DocumentosController as ctrlDocumentos'
          }
        }
      })

      .state('app.invertir', {
        url: 'invertir/',
        abstract: true,
        views: {
          'mainView': {
            templateUrl: 'app/views/invertir/invertir.html',
            controller: 'InvertirController as ctrlInvertir'
          }
        }
      })

      .state('app.invertir.banchilepay', {
        url: 'invertir',
        views: {
          'invertirView': {
            templateUrl: 'app/views/banchilepay/banchilepay.html',
            controller: 'BanchilepayController as ctrlBanchilepay'
          }
        }
      })

      .state('app.definir', {
        url: 'definir/',
        abstract: true,
        views: {
          'mainView': {
            templateUrl: 'app/views/definir/definir.html',
            controller: 'DefinirController as ctrlDefinir'
          }
        }
      })

      .state('app.definir.empresas', {
        url: 'empresas',
        views: {
          'definirView': {
            templateUrl: 'app/views/empresas/empresas.html',
            controller: 'EmpresasController as ctrlEmpresas'
          }
        }
      })

      .state('app.definir.usuarios', {
        url: 'usuarios',
        views: {
          'definirView': {
            templateUrl: 'app/views/usuarios/usuarios.html',
            controller: 'UsuariosController as ctrlUsuarios'
          }
        }
      })

      .state('app.definir.beneficiarios', {
        url: 'beneficiarios',
        views: {
          'definirView': {
            templateUrl: 'app/views/beneficiarios/beneficiarios.html',
            controller: 'BeneficiariosController as ctrlBeneficiarios'
          }
        }
      })

      .state('app.definir.favoritos', {
        url: 'favoritos',
        views: {
          'definirView': {
            templateUrl: 'app/views/beneficiarios/favoritos.html',
            controller: 'FavoritosController as ctrlFavoritos'
          }
        }
      });

  $urlRouterProvider.otherwise('login');
}
