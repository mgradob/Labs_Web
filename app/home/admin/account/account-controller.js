/**
 * Created by mgradob on 1/9/17.
 */
angular.module('labs-cuu')
    .controller('AccountController', function ($scope, $state, $stateParams, AdminHomeService) {
        $scope.userInfo = null;

        $scope.onChangePasswordDialog = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Cambiar Password')
                    .textContent('You can specify some description text in here.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        };

        AdminHomeService.getAccountInfo()
            .then(function (response) {
                var status = response.status;
                var message = response.message;
                var data = response.data;

                switch (status) {
                    case 100:
                        console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                        $scope.userInfo = data;

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
            })
    });