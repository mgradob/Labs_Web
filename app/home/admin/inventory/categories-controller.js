/**
 * Created by mgradob on 12/12/16.
 */
angular.module('labs-cuu')
    .controller('CategoriesController', function ($scope, $state, $stateParams, AdminHomeService) {
        $scope.categories = [];

        $scope.goToAddCategory = function () {
            $state.go('adminHome.categories.add');
        };

        $scope.goToEditCategory = function (category) {
            $state.go('adminHome.categories.edit', {
                categoryId: category.id
            });
        };

        var onGetLabInventorySuccess = function (response) {
            var status = response.status;
            var message = response.message;
            var data = response.data;

            switch (status) {
                case 100:
                    console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                    $scope.categories = data;

                    break;
                default:
                    console.log('Error: ' + status); // TODO

                    break;
            }
        };

        var onGetLabInventoryError = function (response) {
            var status = response.status;
            var message = response.message;

            console.log('Error: status: ' + status + ' message: ' + message);

            // TODO
        };

        AdminHomeService.getLabInventory()
            .then(onGetLabInventorySuccess, onGetLabInventoryError);
    });
