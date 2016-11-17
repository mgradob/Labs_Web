angular.module('labs-cuu', ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: './main/main.html'
            })
            .when('/home/:userId', {
                controller: 'HomeController',
                templateUrl: './home/home.html'
            })
            .otherwise('/');
    });
