angular.module('labs-cuu', ['ui.router', 'ngMaterial', 'ngStorage', 'ngAnimate'])
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
                url: '/labs',
                params: {
                    id_user: String
                },
                templateUrl: 'signup/labs/view-labs-list.html',
                controller: 'SignUpLabsListController'
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
                templateUrl: 'signin/sign-in.html',
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
            .state('adminHome.requests',{
                url: '/requests',
                templateUrl: 'home/admin/requests/view-requests.html',
                controller: 'RequestsController'
            })
            .state('adminHome.requests.detail',{
                url: '/detail',
                params : {
                    userId: String
                },
                templateUrl: 'home/admin/requests/detail/view-request-detail.html',
                controller: 'RequestDetailController'
            })
            .state('adminHome.categories', {
                url: '/categories',
                templateUrl: 'home/admin/inventory/view-categories.html',
                controller: 'CategoriesController'
            })
            .state('adminHome.categories.add', {
                url: '/add',
                templateUrl: 'home/admin/inventory/add/view-add-category.html',
                controller: 'AddCategoryController'
            })
            .state('adminHome.categories.edit', {
                url: '/edit',
                params: {
                    categoryId: Number
                },
                templateUrl: 'home/admin/inventory/edit/view-edit-category.html',
                controller: 'EditCategoryController'
            })
            .state('adminHome.join',{
                url: '/join',
                templateUrl: 'home/admin/join-users/view-join.html',
                controller: 'JoinController'
            })
            .state('adminHome.join.detail',{
                url: '/detail',
                params : {
                    cart: Object
                },
                templateUrl: 'home/admin/join-users/detail/view-join-detail.html',
                controller: 'JoinDetailController'
            })
            .state('adminHome.users', {
                url: '/users',
                templateUrl: 'home/admin/users/view-users.html',
                controller: 'UsersController'
            })
            .state('adminHome.users.add', {
                url: '/add',
                templateUrl: 'home/admin/users/add/view-add-user.html',
                controller: 'AddUserController'
            })
            .state('adminHome.users.edit', {
                url: '/edit',
                params: {
                    userId: String
                },
                templateUrl: 'home/admin/users/edit/view-edit-user.html',
                controller: 'EditUserController'
            })
            .state('adminHome.account', {
                url: '/account',
                templateUrl: './home/admin/account/view-account.html',
                controller: 'AccountController'
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
            .accentPalette('pink');

        // Material Design Icons Set
        $mdIconProvider.defaultIconSet('mdi.svg');
    });

const BASE_URL = 'http://localhost:8080';
