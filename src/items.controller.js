(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemsList = this;
  itemsList.name = items.category;
  itemsList.items = items;
}

})();
