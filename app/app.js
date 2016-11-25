angular.module('labs-cuu', ['ui.router', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {
        // $routeProvider
        //     .when('/', {
        //         controller: 'LandingController',
        //         templateUrl: './landing/landing.html'
        //     })
        //     .when('/signup', {
        //         controller: 'SignUpController',
        //         templateUrl: './signup/sign-up.html'
        //     })
        //     .when('/home/:userId', {
        //         controller: 'HomeController',
        //         templateUrl: './home/home.html'
        //     })
        //     .otherwise('/');

        //region Landing
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: './landing/landing.html'
            });
        //endregion

        //region Sign Up
        $stateProvider
            .state('signup', {
                abstract: true,
                url: '/signup',
                templateUrl: './signup/sign-up.html',
                controller: 'RegisterController'
            })
            .state('signup.form', {
                url: '',
                templateUrl: 'signup/register/view-form.html',
                controller: 'RegisterController'
            })
            .state('signup.labs', {
                url: '/labs/:id_user',
                templateUrl: 'signup/labs/view-labs-list.html',
                controller: 'RegisterController'
            })
            .state('signup.waiting', {
                url: '/waiting',
                templateUrl: 'signup/waiting/view-waiting.html',
                controller: 'RegisterController'
            });
        //endregion

        $urlRouterProvider.otherwise('/');
    });

const BASE_URL = 'http://localhost:3000';