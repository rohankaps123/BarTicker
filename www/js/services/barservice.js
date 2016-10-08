BarTicker.factory('BarService',function(){
    var bars = [
        {id:1,name:"Bar 1", drink:"drink1"},
        {id:2,name:"Bar 2", drink:"drink2"},
        {id:3,name:"Bar 3", drink:"drink3"},
        {id:4,name:"Bar 4", drink:"drink4"}
    ]; //Private Variable
    return {
        GetBars: function(){
            return bars;
        },
        GetBar: function(barId){
            for(i=0;i<bars.length;i++){
                if(bars[i].id == barId){
                    return bars[i];
                }
            }
        }
    }
});
