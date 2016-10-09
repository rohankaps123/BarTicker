BarTicker.controller('posController', function($scope,$stateParams,$state,$location,$firebaseArray,BarService,MenuService) {
    $scope.itemsAll = MenuService;
    $scope.allBars = BarService;
  //  $scope.items = $firebaseArray(MenuService.$ref().orderByChild("barId").equalTo($scope.barId));

    $scope.selectedBar={};
    $scope.busIdSet = false;
    $scope.selectedItem={};
    $scope.itemIdSet =false;

    $scope.barSelected = function(barId) {
      $scope.selectedBar = BarService.$getRecord(barId);
      $scope.items = $firebaseArray(MenuService.$ref().orderByChild("barId").equalTo(barId));
      $scope.busIdSet = true;
      $scope.itemIdSet =false;
    };

    $scope.itemSelected = function(itemId) {
      $scope.selectedItem = MenuService.$getRecord(itemId);
      $scope.itemIdSet = true;
    };

    $scope.addTransaction = function(itemId){
      MenuService[MenuService.$indexFor(itemId)].noSold++;
      MenuService.$save(MenuService.$getRecord(itemId));
    };

    $scope.subtractCustomers = function(barId){
      BarService[BarService.$indexFor(barId)].noOfPeople--;
      BarService.$save(BarService.$getRecord(barId));
    };

    $scope.addCustomers = function(barId){
      BarService[BarService.$indexFor(barId)].noOfPeople++;
      BarService.$save(BarService.$getRecord(barId));
    };

});
