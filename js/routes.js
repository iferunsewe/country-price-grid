app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/table', {
        controller: 'cityTableController',
        templateUrl: 'templates/table.html'
    });

    $routeProvider.when('/chart', {
        controller: 'cityChartController',
        templateUrl: 'templates/chart.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});