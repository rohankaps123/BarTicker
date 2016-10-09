BarTicker.factory('BarService',function($firebaseArray){
  var bars_ref = new Firebase("https://bar-ticker-3a07d.firebaseio.com/bars");
  return $firebaseArray(bars_ref);
});
