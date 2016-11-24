angular.module('labs-cuu', ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'LandingController',
                templateUrl: 'landing/landing.html'
            })
            .when('/home/:userId', {
                controller: 'HomeController',
                templateUrl: './home/home.html'
            })
            .otherwise('/');
    });
