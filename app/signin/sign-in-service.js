/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .service('SignInService', function ($http) {
        this.signIn = function (userId, password) {
            var url = BASE_URL + '/signin';

            var body = {
                id_user: userId,
                password: password
            };

            return $http.post(url, body)
                .then(function (response) {
                    return response.data;
                });
        }
    });