(function(){
'use strict'

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouteProvider'];
function RoutesConfig($stateProvider, $urlRouteProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    template: 'src/templates/home.template.html'

  })

  // categories page
  .state('categories' {
    url: '/categories'

  })

  // menu items page
  .state('items' {
    url: "/categories/items"
  })


};

})();
