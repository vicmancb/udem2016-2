/**
 * Created by vicman on 10/14/16.
 */
angular.module('detail')
    .controller('detailController', function ($stateParams) {
        console.log($stateParams.pokemonID);
    });