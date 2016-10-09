BarTicker.controller('posController', function($scope,$stateParams,$state,$location,BarService,MenuService) {
    $scope.allBars = [
        {id:1,name:"Rafters", direction:"down",menu:[{drink:"Well drink", cost:4},{drink:"Draft Beer", cost:5},{drink:"House Wine", cost:5}]},
        {id:2,name:"McMurphy's", direction:"up", menu:[{drink:"Well drink", cost:7},{drink:"Draft Beer", cost:7},{drink:"House Wine", cost:8}]},
        {id:3,name:"Monkey Bar", direction:"down", menu:[{drink:"Well drink", cost:5},{drink:"Draft Beer", cost:6},{drink:"House Wine", cost:6}]}
    ];

    $scope.selectedBarValue = -1;

    $scope.getSelectedBar = function(selectedBar) {

        $scope.selectedBarValue = selectedBar;
      for(var i=0; i< $scope.allBars.length; i++)
      {
        if(selectedBar == $scope.allBars[i].id)
            $scope.bar = $scope.allBars[i];
      }
  };

});
