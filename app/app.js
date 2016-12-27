angular.module('labs-cuu', ['ui.router', 'ngMaterial', 'ngStorage'])
    .config(function ($stateProvider, $urlRouterProvider, $mdIconProvider, $mdThemingProvider) {
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
            .state('adminLabs', {
                url: '/labs',
                params: {
                    token: String,
                    user: Object
                },
                templateUrl: 'home/admin/labs-list/view-labs-list.html',
                controller: 'LabsListController'
            })
            .state('adminHome', {
                url: '/home',
                templateUrl: 'home/admin/admin-home.html',
                controller: 'AdminHomeController'
            })
            .state('adminHome.dashboard', {
                url: '/dashboard',
                templateUrl: './home/admin/dashboard/view-dashboard.html',
                controller: 'DashboardController'
            })
            .state('adminHome.categories', {
                url: '/categories',
                templateUrl: 'home/admin/inventory/view-categories.html',
                controller: 'CategoriesController'
            });

        // Sub Admin

        // User
        $stateProvider
            .state('userHome', {
                url: '/home/user/:id_user',
                params: {
                    token: String,
                    user: Object
                },
                templateUrl: 'home/user/user-home.html',
                controller: 'UserHomeController'
            });
        //endregion

        $urlRouterProvider.otherwise('/');

        // Material Design Theme
        $mdThemingProvider
            .theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');

        // Material Design Icons Set
        $mdIconProvider.defaultIconSet('mdi.svg');
    });

const BASE_URL = 'http://localhost:8080';
