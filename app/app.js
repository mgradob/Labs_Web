angular.module('labs-cuu', ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: './main/main.html'
            });
    });
