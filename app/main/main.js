/**
 * Created by vicman on 10/14/16.
 */
angular.module('pokemonApp')
    .config(function($stateProvider) {
        $stateProvider.state('main', {
            url: '/',
            templateUrl: '/main/main.html',
            controller: 'listController',
            controllerAs: 'listController'

        });
    });