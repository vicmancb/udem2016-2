/**
 * Created by vicman on 10/14/16.
 */

angular.module('pokemonApp', ['detail', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
