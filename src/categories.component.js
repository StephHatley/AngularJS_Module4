(function(){
'use strict'

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/templates/itemlist.template.html',
  bindings: {
    items: '<'
  }
  });


})();
