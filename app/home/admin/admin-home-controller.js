/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .controller('AdminHomeController', function ($scope, $state, $stateParams, $localStorage) {
        $scope.userId = $localStorage.user.id_user;
        $scope.labName = $localStorage.lab.name;

        $scope.goToHome = function () {
            $state.go('adminHome.dashboard');
        };

        $scope.goToRequests = function () {
            $state.go('adminHome.requests');
        };

        $scope.goToInventory = function () {
            $state.go('adminHome.categories');
        };

        $scope.goToNewUsers = function () {
            $state.go('adminHome.join');
        };

        $scope.goToUsers = function () {
            $state.go('adminHome.users');
        };

        $scope.goToLabsList = function () {
            // todo
        };

        $scope.goToAccountInfo = function () {
            $state.go('adminHome.account');
        };

        $scope.signOut = function () {
            // todo
        };

        $scope.goToHome();
    });
