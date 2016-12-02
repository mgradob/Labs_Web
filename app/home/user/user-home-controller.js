/**
 * Created by mgradob on 11/16/16.
 */
angular.module('labs-cuu')
    .controller('UserHomeController', function ($scope, $state, $stateParams, HomeService) {
        $scope.userId = $stateParams.id_user;
    });