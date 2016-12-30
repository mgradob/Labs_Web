angular.module('labs-cuu')
    .controller('EditUserController', function ($scope, $state, $stateParams, HomeService) {
        $scope.detailUser = null;

        console.log('User', $stateParams.userId);

        HomeService.getUser($stateParams.userId)
            .then(function (response) {
                var status = response.status;
                var message = response.message;
                var data = response.data;

                switch (status) {
                    case 100:
                        console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                        $scope.detailUser = data;

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
