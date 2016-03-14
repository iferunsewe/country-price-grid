app.directive('cityTable', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/table.html'
    };
});

app.directive('cityChart', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/chart.html'
    };
});

app.directive('cityNavbar', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/navbar.html'
    };
});