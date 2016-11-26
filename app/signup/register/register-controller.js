/**
 * Created by mgradob on 11/24/16.
 */
angular.module('labs-cuu')
    .controller('RegisterController', function ($scope, $state, $timeout, SignUpService) {
        var savedUserId = '';

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

            console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

            // Go to labs view.
            $state.go('signup.labs', {id_user: savedUserId}, {location: 'replace'});
        };

        var onCreateAccountError = function (response) {
            var status = response.status;
            var message = response.message;

            console.log('Error: status: ' + status + ' message: ' + message);

            // TODO
        };
    });