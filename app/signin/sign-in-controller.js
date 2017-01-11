/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .controller('SignInController', function ($scope, $state, $stateParams, $localStorage, SignInService) {
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

            $localStorage.$reset();

            switch (status) {
                case 100:
                    var signInInfo = {
                        token: data.token,
                        user: data.user
                    };

                    $localStorage.token = data.token;
                    $localStorage.user = data.user;

                    // Go to home
                    switch (data.user.user_type) {
                        case 'admin':
                            $state.go('adminLabs', signInInfo);

                            break;
                        case 'user':
                            if(data.user.labs.length > 0)
                                $state.go('userHome', signInInfo);
                            else
                                $state.go('signup.waiting', {}, {location: 'replace'});

                            break;
                        default:
                            break;
                    }

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
