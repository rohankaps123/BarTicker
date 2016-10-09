BarTicker.controller('barListController', function($scope,$window,$state,$location,$interval,BarService,MenuService) {
  $scope.bars = BarService;

  $scope.addBar = function(name,items,capacity,noOfPeople,averageRate){
    $scope.bars.$add({
    name:items,
    items:items,
    capacity:capacity,
    noOfPeople:noOfPeople,
    averageRate:averageRate
  });
};

$scope.goToBarPage = function(bar){
    $location.path('/barmenu/'+ $scope.bars.$keyAt(bar));
};





/**  var getIncreasingRate=function(orderRate,peopleRate,currentPrice,maxPrice){
    return (orderRate+0.5*peopleRate)*0.02*currentPrice*(maxPrice-currentPrice)/maxPrice
  };
  var getDecreasingRate = function(orderRate,peopleRate,currentPrice){
    return (orderRate+0.5*peopleRate)*0.02*currentPrice*(1-currentPrice)
  };

  var getCurrentPrice = function(orderRate,peopleRate,maxPrice,minPrice,startingPrice,time){
    return minPrice + (maxPrice-minPrice)/(1+((((maxPrice-minPrice)/startingPrice)-1)*Math.exp(-(orderRate + 0.5*peopleRate)*0.02*time)))
  };
  var currentPrice = getCurrentPrice(50,10,100,4,4.000001,0.0003)
  console.log("Current Price: " + currentPrice)
  var x = getIncreasingRate(5,10,currentPrice,100);
  console.log("Increasing Rate: " + x)
**/


});
