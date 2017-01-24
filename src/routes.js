angular
  .module('banchileApp')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {


  $stateProvider
    .state('banchileApp', {
      url: '/',
      abstract: true,
      templateUrl: 'banchileApp/views/home/home.html',
      controller: 'HomeController as ctrl'
    })
    .state('banchileApp.login', {
      url: 'login',
      views: {
        'loginView': {
          templateUrl: 'app/views/login/login.html',
          controller: 'LoginController as ctrlLogin'
        }
      }
    })
      .state('banchileApp.bienvenidos', {
        url: 'bienvenidos',
        views: {
          'booksView': {
            templateUrl: 'app/views/bienvenidos/bienvenido.html',
            controller: 'BienvenidosController as ctrlBienvenidos'
          }
        }
      })

      .state('banchileApp.consultar', {
        url: 'consultar/',
        abstract: true,
        views: {
          'consultarView': {
            templateUrl: 'app/views/consultar/consultar.html',
            controller: 'ConsultarController as ctrlConsultar'
          }
        }
      })

      .state('banchileApp.consultar.resumen', {
        url: 'resumen',
        views: {
          'consultarView': {
            templateUrl: 'app/views/resumen/resumen.html',
            controller: 'ResumenController as ctrlResumen'
          }
        }
      })

      .state('banchileApp.consultar.patrimonio', {
        url: 'patrimonio',
        views: {
          'consultarView': {
            templateUrl: 'app/views/patrimonio/patrimonio.html',
            controller: 'PatrimonioController as ctrlPatrimonio'
          }
        }
      })

      .state('banchileApp.consultar.autorizaciones', {
        url: 'autorizaciones',
        views: {
          'consultarView': {
            templateUrl: 'app/views/autorizaciones/autorizaciones.html',
            controller: 'AutorizacionesController as ctrlAutorizaciones'
          }
        }
      })

      .state('banchileApp.consultar.movimientos', {
        url: 'movimientos',
        views: {
          'consultarView': {
            templateUrl: 'app/views/movimientos/movimientos.html',
            controller: 'MovimientosController as ctrlMovimientos'
          }
        }
      })

      .state('banchileApp.consultar.documentos', {
        url: 'documentos',
        views: {
          'consultarView': {
            templateUrl: 'app/views/documentos/documentos.html',
            controller: 'DocumentosController as ctrlDocumentos'
          }
        }
      })

      .state('banchileApp.invertir', {
        url: 'invertir/',
        abstract: true,
        views: {
          'invertirView': {
            templateUrl: 'app/views/invertir/invertir.html',
            controller: 'InvertirController as ctrlInvertir'
          }
        }
      })

      .state('banchileApp.invertir.banchilepay', {
        url: 'invertir',
        views: {
          'invertirView': {
            templateUrl: 'app/views/banchilepay/banchilepay.html',
            controller: 'BanchilepayController as ctrlBanchilepay'
          }
        }
      })

      .state('banchileApp.definir', {
        url: 'definir/',
        abstract: true,
        views: {
          'definirView': {
            templateUrl: 'app/views/definir/definir.html',
            controller: 'DefinirController as ctrlDefinir'
          }
        }
      })

      .state('banchileApp.definir.empresas', {
        url: 'empresas',
        views: {
          'empresasView': {
            templateUrl: 'app/views/empresas/empresas.html',
            controller: 'EmpresasController as ctrlEmpresas'
          }
        }
      })

      .state('banchileApp.definir.usuarios', {
        url: 'usuarios',
        views: {
          'definirView': {
            templateUrl: 'app/views/usuarios/usuarios.html',
            controller: 'UsuariosController as ctrlUsuarios'
          }
        }
      })

      .state('banchileApp.definir.beneficiarios', {
        url: 'beneficiarios',
        views: {
          'definirView': {
            templateUrl: 'app/views/beneficiarios/beneficiarios.html',
            controller: 'BeneficiariosController as ctrlBeneficiarios'
          }
        }
      })

      .state('banchileApp.definir.favoritos', {
        url: 'favoritos',
        views: {
          'definirView': {
            templateUrl: 'app/views/beneficiarios/favoritos.html',
            controller: 'FavoritosController as ctrlFavoritos'
          }
        }
      });

  $urlRouterProvider.otherwise('resumen'); // ¿Donde me deberia llevar por defecto ?
}
