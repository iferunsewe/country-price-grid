app.controller('cityChartController', ['$scope','$http', '$log', function($scope, $http, $log){

    //Counts the amount of objects in the cities object with a given status
    $scope.statusCounter = function(cities, status){
        $scope.selectStatus = 0;
        angular.forEach(cities, function(city){
            if(city.status == status){
                $scope.selectStatus++
            }
        });
        $log.info("STATUS LENGTH " +  $scope.selectStatus);
        return $scope.selectStatus

    };

    //Gets city data
    $http.get('data.json').success(function(data){
        $log.debug("GOT CITY DATA");
        $scope.citiesData = data;

        $scope.cityStatuses = [];
        angular.forEach($scope.citiesData, function(cityData){
            $scope.cityStatuses.push(cityData.status);
        });

        //Gets all the unique statuses
        $scope.labels = $scope.cityStatuses.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
        //Creates array of which contains the number for each status
        $scope.arrCountedStatuses = [];
        angular.forEach($scope.labels, function(status){
            $scope.arrCountedStatuses.push($scope.statusCounter($scope.citiesData, status))
        });
        $scope.data = [
            $scope.arrCountedStatuses
        ];
    });



}]);