BarTicker.controller('barListController', function($scope, $window, $state,$firebaseArray, $location, $interval, BarService, MenuService) {
  $scope.bars = BarService;
  $scope.items = MenuService;

  $scope.addBar = function(name, items, capacity, noOfPeople, averageRate) {
    $scope.bars.$add({
      name: items,
      items: items,
      capacity: capacity,
      noOfPeople: noOfPeople,
      averageRate: averageRate
    });
  };

  $scope.goToBarPage = function(bar) {
    $location.path('/barmenu/' + $scope.bars.$keyAt(bar));
  };

  $interval(function() {
    for(var i=0; i<MenuService.length;i++){
      var minPrice = MenuService.$getRecord(MenuService.$keyAt(i)).minPrice;
      var maxPrice = MenuService.$getRecord(MenuService.$keyAt(i)).maxPrice;
      var oldNoSold = MenuService.$getRecord(MenuService.$keyAt(i)).oldNoSold;
      var currentPrice = MenuService.$getRecord(MenuService.$keyAt(i)).currentPrice;
      var noSold = MenuService.$getRecord(MenuService.$keyAt(i)).noSold;
      var oldNoOfPeople = BarService.$getRecord(MenuService.$getRecord(MenuService.$keyAt(i)).barId).oldNoOfPeople;
      var noOfPeople = BarService.$getRecord(MenuService.$getRecord(MenuService.$keyAt(i)).barId).noOfPeople;
      var timeChange = 0.0083;
      var pOCPTC = (((noSold-oldNoSold)/(oldNoSold+1))*100)/timeChange;
      var pPCPTC = (((noOfPeople-oldNoOfPeople)/(oldNoOfPeople+1))*100)/timeChange;
      var hO = 0.8;
      var hP = 0.2;

      var newPrice = getCurrentPrice(currentPrice,pOCPTC,pPCPTC,hO,hP,minPrice,maxPrice,timeChange);
      //console.log(newPrice);

      BarService[BarService.$indexFor(MenuService.$getRecord(MenuService.$keyAt(i)).barId)].oldNoOfPeople = noOfPeople;
      BarService.$save(BarService.$getRecord(MenuService.$getRecord(MenuService.$keyAt(i)).barId));


      MenuService[i].oldPrice = currentPrice;
      MenuService.$save(i);

      MenuService[i].rateChange = ((newPrice-currentPrice)/currentPrice)*100;
      MenuService.$save(i);

      MenuService[i].currentPrice = newPrice;
      MenuService.$save(i);

      MenuService[i].oldNoSold = Math.abs(noSold-oldNoSold);
      MenuService.$save(i);

      MenuService[i].noSold = 0;
      MenuService.$save(i);
    };

   /**for(var j=0; j<BarService.length;j++){
      $scope.itemsss =  $firebaseArray(MenuService.$ref().orderByChild("barId").equalTo(BarService[j].$id));
      console.log($scope.itemsss);
    };
    if(MenuService[i].rateChange > 0){
      positives++;
    }

    var positives =0;
    for(var i=0; i<MenuService.length;i++){
      if(positives>MenuService.length/2){
        BarService[BarService.$indexFor(MenuService.$getRecord(MenuService.$keyAt(i)).barId)].oldNoOfPeople = noOfPeople;
        BarService.$save(BarService.$getRecord(MenuService.$getRecord(MenuService.$keyAt(i)).barId));
      }
    }
    **/


  }, 6000);


  //pOCPTC = percentOrderChangePerTimeChange
  //pPCPTC = percentPeopleChangePerTimeChange
  //hO = heuristic for Percent Order Change
  //hP = heuristic for Percent People Change
  var getCurrentPrice = function(prevPrice, pOCPTC, pPCPTC, hO, hP, minPrice, maxPrice, timeChange) {
    var orderNewPrice = (100 + (pOCPTC * timeChange)) * 0.01 * prevPrice;
    var peopleNewPrice = (100 + (pPCPTC * timeChange)) * 0.01 * prevPrice;
    var currentPrice = hO * orderNewPrice + hP * peopleNewPrice;
    if (currentPrice < minPrice || currentPrice == NaN) {
      return minPrice.toPrecision(2);
    } else {
      if (currentPrice > maxPrice) {
        return maxPrice.toPrecision(2);
      } else {
        return currentPrice.toPrecision(2);
      }
    }
  };




  /**
  var time; //hours after 12:00pm
  var oRi;
  var pRi;
  var maxP = 10 //the maximum possible price for a particular drink on a given day (should be higher on Fridays for example)
  var minP = 5 //the minimum possible price for a particular drink (should be higher on Fridays for example)
  var startingP = 5.00001 //the price at 12:00pm for a particular drink (should be very very close to minPrice)
  var timeInterval = 0.25
  for(var i = 0; i < 24 + timeInterval; i+=timeInterval){
    time = i;
    //console.log("Time: " + time);
    //oRi = 150*(1/Math.sqrt(2*Math.pow(6,2)*Math.PI))*Math.exp(-Math.pow(time-12,2)/(2*Math.pow(6,2))) //orders per timeinterval for the current time
    //pRi = 300*(1/Math.sqrt(2*Math.pow(6,2)*Math.PI))*Math.exp(-Math.pow(time-12,2)/(2*Math.pow(6,2))) //people entering per timeInterval for the current time
    //currentPrice = getCurrentPrice(orderRate,peopleRate,maxPrice,minPrice,startingPrice,time);
    //console.log("Order Rate: " + oRi);
    //console.log("People Rate: " + pRi);
    var oRc;
    var pRc;
    var pORc;
    var pPRc;
    if(time > 0){
      oRp = 150*(1/Math.sqrt(2*Math.pow(6,2)*Math.PI))*Math.exp(-Math.pow(time-12-timeInterval,2)/(2*Math.pow(6,2))) //orders per hour for the previous time
      oRc = oRi - oRp
      pORc = (oRc/oRp)*100
      //console.log("Order Rate Change: " + oRc)
      pRp = 300*(1/Math.sqrt(2*Math.pow(6,2)*Math.PI))*Math.exp(-Math.pow(time-12-timeInterval,2)/(2*Math.pow(6,2))) //people entering per timeInterval for the previous time
      pRc = pRi - pRp
      pPRc = (pRc/pRp)*100
    }
    var prevP;
    var currP;
    if(time === 0){
      //console.log("Current Price: " + startingP);
      prevP = startingP;
    }
    else{
      //console.log("Prev Price: " + prevP);
      //console.log("Orders per Time Interval: " + oRi);
    //  console.log("People per Time Interval: " + pRi);
       //console.log("Percent Order Change per Time Interval: " + pORc);
       //console.log("Percent People Change per Time Interval: " + pPRc);
     //  console.log("Min Price: " + minP);
     //  console.log("Max Price: " + maxP);
     //  console.log("Time Interval: " + timeInterval);
      currP = getCurrentPrice(prevP,pORc,pPRc,0.8,0.2,minP,maxP,timeInterval);
      prevP = currP;
      console.log("Current Price: " + currP);
    }
  };

**/



});
