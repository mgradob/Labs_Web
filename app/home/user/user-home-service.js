/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .service('UserHomeService', function ($http, $localStorage) {
        //region Home - URL: /home/:userId
        this.getUserHome = function () {
            var url = BASE_URL + '/home/' + $localStorage.user.id_user;

            return $http
                .get(url, {
                    headers: {
                        "Authorization": $localStorage.token
                    }
                })
                .then(function (response) {
                    return response.data;
                })
        };
        //endregion
    });
