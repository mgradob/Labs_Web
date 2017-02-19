angular.module('labs-cuu')
    .controller('UsersController', function ($scope, $state, $stateParams, AdminHomeService) {
        $scope.users = [];

        $scope.goToAddUser = function () {
            $state.go('adminHome.users.add');
        };

        $scope.goToEditUser = function (user) {
            $state.go('adminHome.users.edit', {
                userId: user.id_user
            });
        };

        AdminHomeService.getUsers()
            .then(function (response) {
                var status = response.status;
                var message = response.message;
                var data = response.data;

                switch (status) {
                    case 100:
                        console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                        $scope.users = data;

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
            });
    });
