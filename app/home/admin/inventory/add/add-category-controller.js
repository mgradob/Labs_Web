/**
 * Created by mgradob on 12/28/16.
 */
angular.module('labs-cuu')
    .controller('AddCategoryController', function ($scope, $state, $stateParams, AdminHomeService) {
        $scope.newCategoryName = null;
        $scope.newCategoryItems = [];
        $scope.newCategoryNewItem = {
            name: '',
            note: '',
            total: 0,
            available: 0
        };

        $scope.postNewCategory = function () {
            var newCategory = {
                name: $scope.newCategoryName,
                items: $scope.newCategoryItems
            };

            if (!newCategory.name || newCategory.name === '') {
                alert('El nombre de la categoría no puede estar vacio');

                return;
            }

            AdminHomeService.postNewCategory(newCategory)
                .then(function (response) {
                    var status = response.status;
                    var message = response.message;
                    var data = response.data;

                    console.log('Success: status: ' + status + ' message: ' + message + ' data: ' + JSON.stringify(data));

                    $scope.cancelNewCategory();
                }, function (response) {
                    var status = response.status;
                    var message = response.message;

                    console.log('Error: status: ' + status + ' message: ' + message);
                });
        };

        $scope.cancelNewCategory = function () {
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
    });