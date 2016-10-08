angular.module('bar_ticker.controller',[]).controller('barListController', function($scope,$window,$state,$location) {
  console.log('sl;');
  $scope.goToBar = function(index){
    $state.go('barlist.barmenu({barId: barId})');
  }
});
