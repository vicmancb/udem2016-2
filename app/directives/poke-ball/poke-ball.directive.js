/**
 * Created by vicman on 10/21/16.
 */
angular.module('pokemonApp')
    .directive('myPokemon', function() {
        return {
            restrict: 'E',
            scope: {
                name : "="
            },
            templateUrl: '/directives/poke-ball/poke-ball.html',
            link: function(scope, e, attr) {
                console.log(attr);
                console.log(scope);
            }
        };
    });