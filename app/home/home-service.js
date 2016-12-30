/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .service('HomeService', function ($http, $localStorage) {
        //region Home - URL: /home/:userId
        this.getUserHome = function () {
            var url = BASE_URL + '/home/' + $localStorage.user.id_user;

            return $http
                .get(url, {
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
        //endregion

        //region Inventory - URL: /inventory/:labId
        this.getLabInventory = function () {
            var url = BASE_URL + '/inventory/' + $localStorage.lab.id;

            return $http
                .get(url, {
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

        this.postNewCategory = function (newCategory) {
            var url = BASE_URL + '/inventory/' + $localStorage.lab.id;

            var body = {
                name: newCategory.name,
                items: newCategory.items
            };

            return $http
                .post(url, body, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        id_user: $localStorage.user.id_user
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        };
        //endregion

        //region Inventory - URL: /inventory/:labId/:categoryId
        this.getCategory = function (category_id) {
            var url = BASE_URL + '/inventory/' + $localStorage.lab.id + '/' + category_id;

            return $http
                .get(url, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        id_user: $localStorage.user.id_user
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        };

        this.editCategory = function (category) {
            var url = BASE_URL + '/inventory/' + $localStorage.lab.id + '/' + category.id;

            return $http
                .post(url, category, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        id_user: $localStorage.user.id_user
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        };

        this.deleteCategory = function (category_id) {
            var url = BASE_URL + '/inventory/' + $localStorage.lab.id + '/' + category_id;

            return $http
                .delete(url, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        id_user: $localStorage.user.id_user
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        };
        //endregion

        //region Users - URL: /users/:labId
        this.getUsers = function () {
            var url = BASE_URL + '/users/' + $localStorage.lab.id;

            return $http
                .get(url, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        id_user: $localStorage.user.id_user
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        };
        //endregion

        //region Users - URL: /users/:labId/:userId
        this.getUser = function (user_id) {
            var url = BASE_URL + '/users/' + $localStorage.lab.id + '/' + user_id;

            return $http
                .get(url, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        id_user: $localStorage.user.id_user
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        };

        this.editUser = function (user) {
            var url = BASE_URL + '/users/' + $localStorage.lab.id + '/' + user.id_user;

            return $http
                .post(url, user, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        id_user: $localStorage.user.id_user
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        };

        this.deleteUser = function (id_user) {
            var url = BASE_URL + '/users/' + $localStorage.lab.id + '/' + id_user;

            return $http
                .delete(url, {
                    headers: {
                        "Authorization": $localStorage.token
                    },
                    params: {
                        id_user: $localStorage.user.id_user
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        };
        //endregion
    });
