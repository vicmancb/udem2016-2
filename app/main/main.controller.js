/**
 * Created by vicman on 10/14/16.
 */

angular.module('pokemonApp')
    .controller('listController', function ($scope, $http, mainService) {
        var self = this;
        this.diego = "hola parce";
        self.search = self.executeSearch = '';
        self.pokemonList = [];

        // var render = function (pokemon) {
        //     var pokemonElement = '<div class="col-md-3"> ' +
        //         '<div class="poke-ball"> ' +
        //         '<img src="' + pokemon.img + '"> ' +
        //         '<span>' + pokemon.name + '</span> ' +
        //         '</div>' +
        //         '</div>';
        //     $('#list').append(pokemonElement);
        // };

        var loadPokemon = function(){
            mainService.loadPokemon()
                .then(function successCallback(pokemonList) {
                    console.log("desde controlador", pokemonList);
                    angular.forEach(pokemonList, function (pokemon) {
                        pokemon.img = 'https://raw.githubusercontent.com/vicmancb/pokemon/master/'+ pokemon.id +'.png'
                    });
                    self.pokemonList = pokemonList;
                })
                .catch( function errorCallback(response) {
                    console.log('esta vaina falló', response);
                });
        };

        self.find = function () {
            self.executeSearch = self.search;
        };

        loadPokemon();
    });