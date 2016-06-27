'use strict';

angular
.module('zorba.io')
.config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            isAbstract: true,
            templateUrl: '/home/home.html',
            controller: 'HomeCtrl'
        });
});
