BarTicker.controller('barListController', function($scope,$window,$state,$location,BarService,PosService,MenuService) {
  $scope.bars = BarService.GetBars();
  $scope.goToMenu = function(bar){
      $location.path('/barmenu/'+ bar.id);
  }
});
