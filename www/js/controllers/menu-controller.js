BarTicker.controller('barMenuController', function($scope,$stateParams,$location,BarService,PosService,MenuService) {
  var barId = $stateParams.id;
  $scope.bar = BarService.GetBar(barId);
});
