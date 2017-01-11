/**
 * Created by mgradob on 1/6/17.
 */
angular.module('labs-cuu')
    .controller('RequestsController', function ($scope, $state, $stateParams, HomeService) {
        $scope.materialRequests = [];
        
        $scope.goToRequestDetail = function (userId) {
            $state.go('adminHome.requests.detail', {
                userId: userId
            })
        };

        HomeService.getRequests()
            .then(function (response) {
                var status = response.status;
                var message = response.message;
                var data = response.data;

                switch (status) {
                    case 100:
                        console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                        $scope.materialRequests = data;

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