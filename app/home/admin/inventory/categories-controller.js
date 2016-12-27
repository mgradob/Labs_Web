/**
 * Created by mgradob on 12/12/16.
 */
angular.module('labs-cuu')
    .controller('CategoriesController', function ($scope, $state, $stateParams, HomeService) {
        //region Get Categories
        $scope.categories = [];

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

        HomeService.getLabInventory()
            .then(onGetLabInventorySuccess, onGetLabInventoryError);
        //endregion

        //region New Category
        $scope.isCreatingNewCategory = false;
        $scope.newCategoryName = '';
        $scope.newCategoryItems = [];
        $scope.formItem = {
            name: '',
            note: '',
            total: 0,
            available: 0
        };

        $scope.createNewCategory = function () {
            $scope.isCreatingNewCategory = true;
        };

        $scope.postNewCategory = function () {
            var newCategory = {
                name: $scope.newCategoryName,
                components: $scope.newCategoryItems
            };

            if (!newCategory.name || newCategory.name === '') {
                alert('El nombre de la categoría no puede estar vacio');

                return;
            }

            //            HomeService.postNewCategory(newCategory)
            //                .then(function (response) {
            //                    var status = response.status;
            //                    var message = response.message;
            //                    var data = response.data;
            //
            //                    console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));
            //
            //                    cancelNewCategory();
            //
            //                    HomeService.getLabInventory()
            //                        .then(onGetLabInventorySuccess, onGetLabInventoryError);
            //                }, function (response) {
            //                    var status = response.status;
            //                    var message = response.message;
            //
            //                    console.log('Error: status: ' + status + ' message: ' + message);
            //                });
        };

        $scope.cancelNewCategory = function () {
            $scope.isCreatingNewCategory = false;
            $scope.newCategoryItems = [];
            $scope.formItem = {
                name: '',
                note: '',
                total: 0,
                available: 0
            };
        };

        $scope.addItemToCategory = function () {
            var newItem = $scope.formItem;

            $scope.newCategoryItems.push(newItem);

            $scope.formItem = {
                name: '',
                note: '',
                total: 0,
                available: 0
            };
        };
        //endregion
    });
