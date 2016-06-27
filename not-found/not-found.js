'use strict';

angular.module('zorba.io')
    .controller('NotFoundCtrl', function($scope, $location){
        $scope.path = $location.path();
    });
