BarTicker.factory('BarService',function($firebaseObject){
  var ref = new Firebase("https://bar-ticker-673f9.firebaseio.com/");
 // download the data into a local object
 var syncObject = $firebaseObject(ref);

    console.log(syncObject);
    var barTemplate = {
      //CreateTemplate for bar
    }
    var saleTemplate ={
      //CreateTemplate for sales
    }

    return {
        GetBars: function(){
            return [];
        },
        GetBar: function(barId){
          return 1;
            }
    }
});
