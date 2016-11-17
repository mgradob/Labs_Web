/**
 * Created by mgradob on 11/16/16.
 */
angular.module('labs-cuu')
    .controller('HomeController', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.date = new Date();
        $scope.userId = $routeParams.userId;
        $scope.cart = [
            {
                description: "Item 1",
                quantity: 1
            },
            {
                description: "Item 2",
                quantity: 2
            },
            {
                description: "Item 3",
                quantity: 1
            }
        ];
        $scope.borrowed = [
            {
                description: "Item 1",
                quantity: 1,
                date: new Date()
            },
            {
                description: "Item 2",
                quantity: 2,
                date: new Date()
            },
            {
                description: "Item 3",
                quantity: 1,
                date: new Date()
            }
        ];
        $scope.labs = [
            {
                name: "Lab 1",
                categories: [
                    'Category 1',
                    'Category 2',
                    'Category 3',
                    'Category 4',
                    'Category 5'
                ]
            },
            {
                name: "Lab 2",
                categories: [
                    'Category 1',
                    'Category 2',
                    'Category 3',
                    'Category 4',
                    'Category 5'
                ]
            },
            {
                name: "Lab 3",
                categories: [
                    'Category 1',
                    'Category 2',
                    'Category 3',
                    'Category 4',
                    'Category 5'
                ]
            }
        ];
        $scope.history = [
            {
                description: 'Item 3',
                quantity: 5,
                from: new Date(),
                to: new Date()
            },
            {
                description: 'Item 4',
                quantity: 4,
                from: new Date(),
                to: new Date()
            },
            {
                description: 'Item 5',
                quantity: 2,
                from: new Date(),
                to: new Date()
            }
        ];
    }]);