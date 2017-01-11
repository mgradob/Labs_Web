/**
 * Created by mgradob on 12/28/16.
 */
angular.module('labs-cuu')
    .controller('EditCategoryController', function ($scope, $state, $stateParams, $mdDialog, HomeService) {
        $scope.detailCategory = null;
        $scope.detailCategoryNewItem = {
            name: '',
            note: '',
            total: 0,
            available: 0
        };
        $scope.detailCategoryEditItem = {
            name: '',
            note: '',
            total: 0,
            available: 0
        };

        //region Category - General info
        $scope.cancelEditCategory = function () {

        };

        $scope.postDeleteCategory = function (ev) {
            var confirm = $mdDialog.confirm()
                .title('Borrar categoría?')
                .textContent('Ésta información no se podrá restaurar después.')
                .targetEvent(ev)
                .ok('Borrar')
                .cancel('Cancelar');

            $mdDialog.show(confirm)
                .then(function () {
                    HomeService.deleteCategory($scope.detailCategory.id)
                        .then(function (response) {
                            var status = response.status;
                            var message = response.message;
                            var data = response.data;

                            switch (status) {
                                case 100:
                                    console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                                    break;
                                default:
                                    console.log('Error: ' + status); // TODO

                                    break;
                            }
                        }, function (response) {
                            var status = response.status;
                            var message = response.message;

                            console.log('Error: status: ' + status + ' message: ' + message);

                            // TODO
                        });
                });
        };

        $scope.postEditCategory = function () {
            HomeService.editCategory($scope.detailCategory)
                .then(function (response) {
                    var status = response.status;
                    var message = response.message;
                    var data = response.data;

                    switch (status) {
                        case 100:
                            console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                            break;
                        default:
                            console.log('Error: ' + status); // TODO

                            break;
                    }
                }, function (response) {
                    var status = response.status;
                    var message = response.message;

                    console.log('Error: status: ' + status + ' message: ' + message);

                    // TODO
                })
        };
        //endregion

        //region Category - Items
        $scope.addingItem = false;
        $scope.editingItem = false;

        $scope.addNewItemToCategory = function () {
            var newItem = $scope.detailCategoryNewItem;

            $scope.detailCategory.items.push(newItem);
            
            $scope.addingItem = false;

            $scope.detailCategoryNewItem = {
                name: '',
                note: '',
                total: 0,
                available: 0
            };
        };

        $scope.editItem = function (item) {
            $scope.addingItem = false;
            $scope.editingItem = true;

            $scope.detailCategoryEditItem = {
                id: item.id,
                name: item.name,
                note: item.note,
                total: item.total,
                available: item.available
            };
        };

        $scope.updateEditedItemToCategory = function () {
            var editedItem = $scope.detailCategoryEditItem;

            $scope.detailCategory.items[editedItem.id] = editedItem;

            $scope.editingItem = false;

            $scope.detailCategoryEditItem = {
                name: '',
                note: '',
                total: 0,
                available: 0
            };
        };

        $scope.deleteItemFromCategory = function () {
            $scope.detailCategory.items.splice($scope.detailCategoryEditItem.id, 1);

            $scope.editingItem = false;

            $scope.detailCategoryEditItem = {
                name: '',
                note: '',
                total: 0,
                available: 0
            };
        };
        //endregion

        HomeService.getCategory($stateParams.categoryId)
            .then(function (response) {
                var status = response.status;
                var message = response.message;
                var data = response.data;

                switch (status) {
                    case 100:
                        console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                        $scope.detailCategory = data;

                        break;
                    default:
                        console.log('Error: ' + status); // TODO

                        break;
                }
            }, function (response) {
                var status = response.status;
                var message = response.message;

                console.log('Error: status: ' + status + ' message: ' + message);

                // TODO
            });
    });