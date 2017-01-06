/**
 * Created by mgradob on 11/25/16.
 */
angular.module('labs-cuu')
    .controller('SignUpLabsListController', function ($scope, $state, $stateParams, SignUpService) {
        var userId = $stateParams.id_user;

        $scope.availableLabs = [];
        var selectedLabs = [];

        function getAvailableLabs(id_user) {
            console.log('Getting available labs for ' + id_user);

            SignUpService.getLabs(id_user)
                .then(function (response) {
                    var status = response.status;
                    var message = response.message;
                    var data = response.data;

                    switch (status) {
                        case 100:
                            console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));
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
                }, function (response) {
                    var status = response.status;
                    var message = response.message;

                    console.log('Error: status: ' + status + ' message: ' + message);

                    // TODO
                });
        }

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

            var labsRequested = [];
            selectedLabs.forEach(function (lab) {
                labsRequested.push(lab);
            });

            SignUpService.putLabs(userId, labsRequested)
                .then(function (response) {
                    var status = response.status;
                    var message = response.message;
                    var data = response.data;

                    switch (status) {
                        case 100:
                            console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                            $state.go('signup.waiting', $stateParams, {location: 'replace'});

                            break;
                        default:
                            console.log('Error: status: ' + status + ' message: ' + message); // TODO

                            break;
                    }
                }, function (response) {
                    var status = response.status;
                    var message = response.message;

                    console.log('Error: status: ' + status + ' message: ' + message);

                    // TODO
                });
        };

        getAvailableLabs(userId);
    });