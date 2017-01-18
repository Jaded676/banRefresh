angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {


  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      templateUrl: 'app/views/hello/hello.html',
      controller: 'HelloController as ctrl'
    })
    .state('books', {
      url: '/books',
      views: {
        'menuBooks': {
          templateUrl: 'app/views/books/books.html',
          controller: 'BooksController as ctrlBooks'
        }
      }
    });
  $urlRouterProvider.otherwise('/books');
}
