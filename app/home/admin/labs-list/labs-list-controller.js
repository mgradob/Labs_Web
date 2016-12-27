/**
 * Created by mgradob on 12/16/16.
 */
angular.module('labs-cuu')
    .controller('LabsListController', function ($scope, $state, $stateParams, $localStorage) {
        $scope.labs = $localStorage.user.labs;

        $scope.goToLab = function (lab) {
            $localStorage.lab = lab;

            $state.go('adminHome');
        }
    });
