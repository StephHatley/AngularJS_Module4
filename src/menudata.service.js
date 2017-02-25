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
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function(result){
      //console.log(result.data);
      return(result.data);
    }
    );

  };

  service.getItemsForCategory = function(categoryShortName) {
    //returns promise using $http service
    //https://davids-restaurant.herokuapp.com/menu_items.json?category=
    //append categoryShortName
    //console.log("category short name: " + categoryShortName);
    var totalUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;

    return $http({
      method: "GET",
      url: totalUrl
    }).then(function(result){
      //console.log(result.data.menu_items);
      return(result.data.menu_items);
    });

  };



};





})();
