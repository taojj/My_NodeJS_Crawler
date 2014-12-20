var myapp = angular.module('sortableApp', ['gen.genericDirectives', 'ui.sortable']);


myapp.controller('sortableController', function ($scope) {
  var tmpList = [];
  
  $scope.rootItem = {
    title: 'Root Item',
    items: [{
      title:'Item 1',
      items: []
    }, {
      title:'Item 2',
      items: [{
        title:'Item 2.1', items: []
      }, {
        title:'Item 2.2', items: []
      }]
    }]
  };

  $scope.items = $scope.rootItem.items;
  
  $scope.sortingLog = [];
  
  $scope.sortableOptions = {
    connectWith: ".apps-container",
  };

  $scope.getView = function (item) {
      /*
        you can return a different url
        to load a different template dynamically
        based on the provided item 
        */
      if (item) {
        return 'nestable_item.html';
      }
      return null;
  };
  
});