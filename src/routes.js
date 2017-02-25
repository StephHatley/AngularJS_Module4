(function(){
'use strict'

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'

  })

  // categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
        items: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
        }]
    }
  })

  // menu items page
  .state('items', {
    url: "/categories/{itemShortName}",
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as itemsList',
    resolve: {
      items: ['$stateParams','MenuDataService', function($stateParams, MenuDataService){
          //console.log($stateParams.itemShortName);
          return MenuDataService.getItemsForCategory($stateParams.itemShortName);
      }]
    }
  });


};

})();
