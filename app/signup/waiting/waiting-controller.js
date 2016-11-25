/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .controller('WaitingController', function ($scope, $state, $stateParams) {
        $scope.finish = function () {
            $state.go('landing', $stateParams, {location: 'replace'});
        }
    });