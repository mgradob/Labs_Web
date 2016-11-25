/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .controller('LabsListController', function ($scope, $state, $stateParams, SignUpService) {
        var userId = $stateParams.id_user;

        $scope.availableLabs = [];
        var selectedLabs = [];

        //region Get Labs
        var getAvailableLabs = function (id_user) {
            console.log('Getting available labs for ' + id_user);

            SignUpService.getLabs(id_user)
                .then(onGetLabsSuccess, onGetLabsError)
        };

        var onGetLabsSuccess = function (response) {
            var status = response.status;
            var message = response.message;
            var data = response.data;

            switch (status) {
                case 100:
                    console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + data);
                    data.forEach(function (lab) {
                        console.log('Lab: ' + lab.name);
                    });

                    $scope.availableLabs = data;

                    break;
                case 202:
                    console.log('User not found'); // TODO

                    break;
                default:
                    console.log('Error'); // TODO

                    break;
            }
        };

        var onGetLabsError = function (response) {
            var status = response.status;
            var message = response.message;

            console.log('Error: status: ' + status + ' message: ' + message);

            // TODO
        };
        //endregion

        //region Save Labs
        $scope.onLabClicked = function (lab) {
            var index = selectedLabs.indexOf(lab);

            if (index >= 0) selectedLabs.splice(index, 1);
            else selectedLabs.push(lab);
        };

        $scope.labExists = function (lab) {
            return selectedLabs.indexOf(lab) >= 0;
        };

        $scope.updateLabs = function () {
            if (selectedLabs.length === 0) {
                alert('No labs selected');

                return;
            }

            var labsIds = [];
            selectedLabs.forEach(function (lab) {
               labsIds.push(lab.id);
            });

            SignUpService.putLabs(userId, labsIds)
                .then(onUpdateLabsSuccess, onUpdateLabsError);
        };

        var onUpdateLabsSuccess = function (response) {
            var status = response.status;
            var message = response.message;
            var data = response.data;

            switch (status) {
                case 100:
                    console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + data);

                    $state.go('signup.waiting', $stateParams, {location: 'replace'});

                    break;
                default:
                    console.log('Error'); // TODO

                    break;
            }
        };

        var onUpdateLabsError = function (response) {
            var status = response.status;
            var message = response.message;

            console.log('Error: status: ' + status + ' message: ' + message);

            // TODO
        };
        //endregion

        getAvailableLabs(userId);
    });