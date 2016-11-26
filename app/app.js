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
        //         templateUrl: './home/user-home.html'
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
                templateUrl: './signup/sign-up.html'
            })
            .state('signup.form', {
                url: '',
                templateUrl: 'signup/register/view-form.html',
                controller: 'RegisterController'
            })
            .state('signup.labs', {
                url: '/labs/:id_user',
                templateUrl: 'signup/labs/view-labs-list.html',
                controller: 'LabsListController'
            })
            .state('signup.waiting', {
                url: '/waiting',
                templateUrl: 'signup/waiting/view-waiting.html',
                controller: 'WaitingController'
            });
        //endregion

        //region Sign In
        $stateProvider
            .state('signin', {
                url: '/signin',
                templateUrl: './signin/sing-in.html',
                controller: 'SignInController'
            });
        //endregion

        //region Home
        // Admin
        $stateProvider
            .state('adminHome', {
                url: '/home/admin/:id_user',
                params: {
                    id_user: String,
                    token: String
                },
                templateUrl: 'home/admin/admin-home.html',
                controller: 'AdminHomeController'
            });

        // User
        $stateProvider
            .state('userHome', {
                url: '/home/user/:id_user',
                params: {
                    id_user: String,
                    token: String
                },
                templateUrl: 'home/user/user-home.html',
                controller: 'UserHomeController'
            });
        //endregion

        $urlRouterProvider.otherwise('/');
    });

const BASE_URL = 'http://localhost:3000';