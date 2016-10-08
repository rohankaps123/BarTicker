BarTicker.factory('PosService',function($firebaseObject){
  var ref = new Firebase("https://bar-ticker-673f9.firebaseio.com/data");
 // download the data into a local object
 var syncObject = $firebaseObject(ref);


 var posTemplate = {
 }
  return{}
});
