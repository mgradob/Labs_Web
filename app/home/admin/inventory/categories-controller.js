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
        $scope.newCategoryName = null;
        $scope.newCategoryItems = [];
        $scope.newCategoryNewItem = {
            name: '',
            note: '',
            total: 0,
            available: 0
        };

        $scope.createNewCategory = function () {
            $scope.isCreatingNewCategory = true;
            $scope.isEditingCategory = false;

            $scope.detailCategoryName = '';
            $scope.detailCategoryId = '';
            $scope.detailCategoryItems = [];
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
            $scope.newCategoryName = null;
            $scope.newCategoryItems = [];
            $scope.newCategoryNewItem = {
                name: '',
                note: '',
                total: 0,
                available: 0
            };
        };

        $scope.addNewItemToNewCategory = function () {
            var newItem = $scope.newCategoryNewItem;

            $scope.newCategoryItems.push(newItem);

            $scope.newCategoryNewItem = {
                name: '',
                note: '',
                total: 0,
                available: 0
            };
        };
        //endregion

        //region Category Details
        $scope.isEditingCategory = false;
        $scope.detailCategoryName = '';
        $scope.detailCategoryId = '';
        $scope.detailCategoryItems = [];
        $scope.detailCategoryNewItem = {
            name: '',
            note: '',
            total: 0,
            available: 0
        };

        $scope.selectCategory = function (category) {
            $scope.isEditingCategory = true;
            $scope.isCreatingNewCategory = false;

            $scope.detailCategoryName = category.name;
            $scope.detailCategoryId = category.id;
        };

        $scope.addNewItemToCategory = function () {
            var newItem = $scope.newCategoryNewItem;

            $scope.detailCategoryItems.push(newItem);

            $scope.detailCategoryNewItem = {
                name: '',
                note: '',
                total: 0,
                available: 0
            };
        };
        //endregion
    });
