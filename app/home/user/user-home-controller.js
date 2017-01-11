/**
 * Created by mgradob on 11/16/16.
 */
angular.module('labs-cuu')
    .controller('UserHomeController', function ($scope, $state, $stateParams, $localStorage, UserHomeService) {
        $scope.userName = $localStorage.user.full_name.split(' ')[0];
        $scope.cart = [];
        $scope.borrowed = [];
        $scope.labs = [];
        $scope.history = [];

        UserHomeService.getUserHome()
            .then(function (response) {
                var status = response.status;
                var message = response.message;
                var data = response.data;

                switch (status) {
                    case 100:
                        console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                        $scope.cart = response.data.cart;
                        $scope.borrowed = response.data.borrowed;
                        $scope.labs = response.data.labs;
                        $scope.history = response.data.history;

                        break;
                    default:
                        console.log('Error: ' + status); // TODO

                        break;
                }
            }, function (response) {
                var status = response.status;
                var message = response.message;

                console.log('Error: status: ' + status + ' message: ' + message);

                // TODO
            });
    });