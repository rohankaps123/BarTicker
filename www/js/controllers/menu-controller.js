BarTicker.controller('barMenuController', function($scope,$stateParams,$location, $firebaseArray,BarService,MenuService) {
  $scope.itemsAll = MenuService;
  $scope.barId = $stateParams.id;
  $scope.items = $firebaseArray(MenuService.$ref().orderByChild("barId").equalTo($scope.barId));
  $scope.bars = BarService;

  $scope.addItem = function(name,barId,noSold,incState,rateChange,currentPrice,minPrice,maxPrice){
    $scope.items.$add({
    name:name,
    barId:barId,
    noSold:noSold,
    incState:incState,
    rateChange:rateChange,
    currentPrice:currentPrice,
    minPrice:minPrice,
    maxPrice:maxPrice
  });
}

  //  $scope.addItem("Long Island Ice Tea",$scope.barId,0,0,0,0,8,12);
    $scope.bar = $scope.bars.$getRecord($scope.barId);
});

BarTicker.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);
