/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .controller('SignInController', function ($scope, $state, $stateParams, SignInService) {
        var userId;

        $scope.signIn = function (user) {
            userId = user.id_user.toUpperCase();

            console.log('Signing in ' + userId);

            SignInService.signIn(userId, user.password)
                .then(onSignInSuccess, onSignInError);
        };

        var onSignInSuccess = function (response) {
            var status = response.status;
            var message = response.message;
            var data = response.data;

            console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

            switch (status) {
                case 100:
                    var signInInfo = {
                        id_user: userId,
                        token: data.token
                    };

                    // Go to home
                    if (data.isAdmin) $state.go('adminHome', signInInfo);
                    else $state.go('userHome', signInInfo);

                    break;
                case 211:
                case 212:
                default:
                    alert(message);
                    break;
            }
        };

        var onSignInError = function (response) {
            var status = response.status;
            var message = response.message;

            console.log('Error: status: ' + status + ' message: ' + message);

            userId = null;
            // TODO
        };
    });
