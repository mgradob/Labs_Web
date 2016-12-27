/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .controller('AdminHomeController', function ($scope, $state, $stateParams, $localStorage) {
        $scope.userId = $localStorage.user.id_user;

        $localStorage.lab = $stateParams.lab;

        $scope.goToHome = function () {
            $state.go('adminHome.dashboard');
        };

        $scope.goToRequests = function () {
            // todo
        };

        $scope.goToNewUsers = function () {
            // todo
        };

        $scope.goToInventory = function () {
            $state.go('adminHome.categories');
        };

        $scope.goToUsers = function () {
            // todo
        };

        $scope.goToLabsList = function () {
            // todo
        };

        $scope.goToConfig = function () {
            // todo
        };

        $scope.signOut = function () {
            // todo
        };

        $scope.goToHome();
    });
