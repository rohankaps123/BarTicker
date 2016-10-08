BarTicker.controller('barListController', function($scope,$window,$state,$location,BarService,PosService,MenuService) {
    //$scope.allBars = BarService.[method]();
    $scope.allBars = [
        {id:1,name:"Rafters", direction:"down",menu:[{drink:"Well drink", cost:4},{drink:"Draft Beer", cost:5},{drink:"House Wine", cost:5}]},
        {id:2,name:"McMurphy's", direction:"up", menu:[{drink:"Well drink", cost:7},{drink:"Draft Beer", cost:7},{drink:"House Wine", cost:8}]},
        {id:3,name:"Monkey Bar", direction:"down", menu:[{drink:"Well drink", cost:5},{drink:"Draft Beer", cost:6},{drink:"House Wine", cost:6}]}
    ];
});
