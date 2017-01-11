/**
 * Created by mgradob on 1/5/17.
 */
angular.module('labs-cuu')
    .controller('JoinDetailController', function ($scope, $state, $stateParams, HomeService) {
        $scope.joinRequest = $stateParams.request;

        $scope.postDenyUser = function () {
            HomeService.denyUser($scope.joinRequest.user_id)
                .then(function (response) {
                    var status = response.status;
                    var message = response.message;
                    var data = response.data;

                    switch (status) {
                        case 100:
                            console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

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
        };

        $scope.postAcceptUser = function () {
            HomeService.acceptUser($scope.joinRequest.user_id)
                .then(function (response) {
                    var status = response.status;
                    var message = response.message;
                    var data = response.data;

                    switch (status) {
                        case 100:
                            console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

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
        };
    });