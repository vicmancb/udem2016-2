/**
 * Created by vicman on 10/21/16.
 */

angular.module('pokemonApp')
    .service('mainService', function ($http) {
        var self = this;

        var getNumber = function(url){
            var arr  = url.split('/');
            return arr[arr.length - 2];
        };

        self.loadPokemon = function(){
            var pokemonListReturn = [];
            return $http({
                method: 'GET',
                url: "https://udem.herokuapp.com/parcial"
            })
                .then(function (pokemonList) {
                    angular.forEach(pokemonList.data.results, function (pokemon) {
                        var pokemonObj = {
                            id : getNumber(pokemon.url),
                            name : pokemon.name
                        };
                        pokemonListReturn.push(pokemonObj);
                    });

                    return pokemonListReturn;
            });
        };
    });