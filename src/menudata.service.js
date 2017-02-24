(function(){
'use strict'

angular.module('data')
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function() {
    //returns promise using $http service
    //https://davids-restaurant.herokuapp.com/categories.json


  };

  service.getItemsForCategory = function(categoryShortName) {
    //returns promise using $http service
    //https://davids-restaurant.herokuapp.com/menu_items.json?category=
    //append categoryShortName

  };



};





})();
