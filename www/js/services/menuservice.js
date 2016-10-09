BarTicker.factory('MenuService',function($firebaseArray){
  var items_ref = new Firebase("https://bar-ticker-3a07d.firebaseio.com/items");
  return $firebaseArray(items_ref);
});
