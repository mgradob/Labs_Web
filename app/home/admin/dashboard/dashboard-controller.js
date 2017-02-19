/**
 * Created by mgradob on 12/10/16.
 */
angular.module('labs-cuu')
    .controller('DashboardController', function ($scope, $state, $stateParams, $localStorage, AdminHomeService) {
        $scope.carts = [];
        $scope.newUsers = [];
        $scope.categories = [];
        $scope.users = [];

        $scope.goToInventory = function () {
            $state.go('adminHome.categories')
        };

        var onGetHomeSuccess = function (response) {
            $scope.carts = [];
            $scope.newUsers = [];
            $scope.categories = [];
            $scope.users = [];

            var status = response.status;
            var message = response.message;
            var data = response.data;

            switch (status) {
                case 100:
                    console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                    $scope.carts = data.requests;
                    $scope.newUsers = data.signUpRequests;
                    $scope.categories = data.categories;
                    $scope.users = data.users;

                    break;
                default:
                    console.log('Error: ' + status); // TODO

                    break;
            }
        };

        var onGetHomeError = function (response) {
            var status = response.status;
            var message = response.message;

            console.log('Error: status: ' + status + ' message: ' + message);

            // TODO
        };

        AdminHomeService.getUserHome($localStorage.id)
            .then(onGetHomeSuccess, onGetHomeError);
    });
