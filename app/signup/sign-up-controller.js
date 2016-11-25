/**
 * Created by mgradob on 11/24/16.
 */
angular.module('labs-cuu')
    .controller('SignUpController', ['$scope', 'SignUpService', function ($scope, SignUpService) {
        var STEPS = {
            form: 'form',
            labs: 'labs',
            waiting: 'waiting'
        };
        $scope.signUpStep = STEPS.form;

        $scope.availableLabs = [];

        var savedUserId = '';

        //region Register
        $scope.register = function (user) {
            user.id_user = user.id_user.toUpperCase();
            user.career = user.career.toUpperCase();

            savedUserId = user.id_user;

            console.log('Creating account for ' + savedUserId);

            SignUpService.register(user)
                .then(onCreateAccountSuccess, onCreateAccountError);
        };

        var onCreateAccountSuccess = function (response) {
            var status = response.status;
            var message = response.message;
            var data = response.data;

            console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + data);

            $scope.signUpStep = STEPS.labs;

            console.log('STEP: ' + $scope.signUpStep);

            $scope.getAvailableLabs(savedUserId);
        };

        var onCreateAccountError = function (response) {
            var status = response.status;
            var message = response.message;

            console.log('Error: status: ' + status + ' message: ' + message);

            // TODO
        };
        //endregion

        //region Get Available Labs
        $scope.getAvailableLabs = function (id_user) {
            console.log('Getting available labs for ' + id_user);

            SignUpService.getLabs(id_user)
                .then(onGetLabsSuccess, onGetLabsError)
        };

        var onGetLabsSuccess = function (response) {
            var status = response.status;
            var message = response.message;
            var data = response.data;

            console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + data);

            switch (status) {
                case 100:
                    $scope.availableLabs = data;

                    break;
                case 202:
                    console.log('User not found'); // TODO

                    break;
                default:
                    console.log('Error'); // TODO

                    break;
            }
        };

        var onGetLabsError = function (response) {
            var status = response.status;
            var message = response.message;

            console.log('Error: status: ' + status + ' message: ' + message);

            // TODO
        };
        //endregion
    }]);