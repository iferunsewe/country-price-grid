app.controller('cityTableController', ['$scope', '$http', '$log', function ($scope, $http, $log) {

    //Creating defaults to help sort table
    $scope.sortType = 'startDate';
    $scope.sortReverse = false;

    //Gets city data
    $http.get('data.json').success(function(data){
        $log.debug("GOT CITY DATA");
        $scope.citiesData = data;
    });

}]);
