(function(){
'use strict'

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/selectedList.template.html',
  bindings: {
    items: '<'
  }
  });


})();
