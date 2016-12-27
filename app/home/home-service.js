/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .service('HomeService', function ($http, $localStorage) {
        this.getUserHome = function () {
            var url = BASE_URL + '/home/' + $localStorage.user.id_user;

            return $http.get(url, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        lab_id: $localStorage.lab.id
                    }
                })
                .then(function (response) {
                    return response.data;
                })
        };

        this.getLabInventory = function () {
            var url = BASE_URL + '/inventory/' + $localStorage.lab.id;

            return $http.get(url, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        id_user: $localStorage.user.id_user
                    }
                })
                .then(function (response) {
                    return response.data;
                })
        };

        this.postCategory = function (newCategory) {
            var url = BASE_URL + '/inventory/' + $localStorage.lab.id;

            var body = {
                name: newCategory.name,
                components: newCategory.components
            };

            return $http.post(url, body)
                .then(function (response) {
                    return response.data;
                });
        };
    });
