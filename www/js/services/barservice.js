BarTicker.factory('BarService',['$firebaseObject',function($firebaseObject){
  var ref = new Firebase("https://bar-ticker-673f9.firebaseio.com/Bars");
 // download the data into a local object
 var syncObject = $firebaseObject(ref);

    var barTemplate = {
      //CreateTemplate for bar
    }
    var saleTemplate ={
      //CreateTemplate for sales
    }

    return {}
}]);
