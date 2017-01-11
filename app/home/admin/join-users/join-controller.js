/**
 * Created by mgradob on 1/5/17.
 */
angular.module('labs-cuu')
    .controller('JoinController', function ($scope, $state, $stateParams, AdminHomeService) {
        $scope.joinRequests = [];
        
        $scope.goToJoinRequest = function (request) {
            $state.go('adminHome.join.detail', {
                request: request
            })
        };

        AdminHomeService.getJoins()
            .then(function (response) {
                var status = response.status;
                var message = response.message;
                var data = response.data;

                switch (status) {
                    case 100:
                        console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                        $scope.joinRequests = data;

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