BarTicker.controller('barMenuController', function($scope,$stateParams,$location,BarService,PosService,MenuService) {

var x = getIncreasingRate(5,10,getCurrentPrice(5,10,100,0.50,1,2));
console.log("Increasing Rate: " + x)

var getIncreasingRate=function(orderRate,peopleRate,currentPrice){
  return (orderRate+peopleRate)*currentPrice*(1-currentPrice)
};
var getDecreasingRate = function(orderRate,peopleRate,currentPrice){
  return (orderRate+peopleRate)*currentPrice*(1-currentPrice)
};

var getCurrentPrice = function(orderRate,peopleRate,maxPrice,minPrice,startingPrice,time){
  return minPrice + (maxPrice-minPrice)/(1+(((maxPrice-minPrice)/startingPrice)-1)*expfun(-(orderRate + peopleRate)*time))
};
});
