/**
 * Created by mgradob on 11/24/16.
 */
angular.module('labs-cuu')
    .service('SignUpService', function ($http) {
        this.register = function (user) {
            var url = BASE_URL + '/signup';

            var body = {
                id_user: user.id_user,
                password: user.password,
                full_name: user.full_name,
                career: user.career,
                campus: user.campus
            };

            return $http.post(url, body)
                .then(function (response) {
                    return response.data;
                });
        };

        this.getLabs = function (id_user) {
            var url = BASE_URL + '/signup/' + id_user;

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        };

        this.putLabs = function (id_user, labs) {
            var url = BASE_URL + '/signup/' + id_user;

            var body = {
                labs: labs
            };

            return $http.post(url, body)
                .then(function (response) {
                    return response.data;
                });
        }
    });
