/**
 * Created by vicman on 10/14/16.
 */
angular.module('detail', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider.state('detail', {
            url: '/detail/:pokemonID',
            templateUrl: '/detail/detail.html',
            controller: 'detailController',
            controllerAs: 'detailController'
        });
    });

