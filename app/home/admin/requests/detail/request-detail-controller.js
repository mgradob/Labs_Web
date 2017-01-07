/**
 * Created by mgradob on 1/6/17.
 */
angular.module('labs-cuu')
    .controller('RequestDetailController', function ($scope, $state, $stateParams, HomeService) {
        $scope.cart = null;

        HomeService.getRequest($stateParams.userId)
            .then(function (response) {
                var status = response.status;
                var message = response.message;
                var data = response.data;

                switch (status) {
                    case 100:
                        console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                        $scope.cart = data;

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