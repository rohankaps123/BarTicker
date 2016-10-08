BarTicker.controller('barMenuController', function($scope,$stateParams,$location,BarService,PosService,MenuService) {       var bar;
    var barId = $stateParams.id;
	
	console.log(barId);
                                                                                                                     
    var allBars = [
        {id:1,name:"Rafters", direction:"down",menu:[{drink:"Well drink", cost:4, change:-0.05},{drink:"Draft Beer", cost:5,change:-0.02},{drink:"House Wine", cost:5,change:0}]},
        {id:2,name:"McMurphy's", direction:"up", menu:[{drink:"Well drink", cost:7,change:0.07},{drink:"Draft Beer", cost:7,change:0.10},{drink:"House Wine", cost:8,change:0.20}]},
        {id:3,name:"Monkey Bar", direction:"down", menu:[{drink:"Well drink", cost:5,change:0},{drink:"Draft Beer", cost:6,change:0.01},{drink:"House Wine", cost:6,change:0.02}]}
    ];
                                                                                                                     
                                                                                                                     
                                                                                                                     
    for(var i=0; i < allBars.length; i++){
        if(allBars[i].id == barId)
            bar=allBars[i];
    }                                                                                                       
    $scope.bar = bar;
});

BarTicker.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);
