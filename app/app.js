angular.module('labs-cuu', ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'LandingController',
                templateUrl: './landing/landing.html'
            })
            .when('/signup', {
                controller: 'SignUpController',
                templateUrl: './signup/sign-up.html'
            })
            .when('/home/:userId', {
                controller: 'HomeController',
                templateUrl: './home/home.html'
            })
            .otherwise('/');
    });

const BASE_URL = 'http://localhost:3000';