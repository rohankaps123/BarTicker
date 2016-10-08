BarTicker.factory('MenuService',function($firebaseObject){
  var ref = new Firebase("https://bar-ticker-673f9.firebaseio.com/data");
 // download the data into a local object
 var syncObject = $firebaseObject(ref);

 var menuTemplate = {
   //Create template for menu data
 }
 var itemTemplate = {
   //Create template for itemData
 }
  return{}
});
