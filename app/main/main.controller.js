/**
 * Created by vicman on 10/14/16.
 */

angular.module('pokemonApp')
    .controller('listController', function ($http) {
        var self = this;
        self.search = self.executeSearch = '';
        self.pokemonList = [];


        var getNumber = function(url){
            var arr  = url.split('/');
            return arr[arr.length - 2];
        };

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
            $http({
                method: 'GET',
                url: "https://udem.herokuapp.com/parcial"
            }).then(function successCallback(response) {
                angular.forEach(response.data.results, function (pokemon) {
                    console.log("tatata");
                    var pokemonObj = {
                        id : getNumber(pokemon.url),
                        name : pokemon.name,
                        img : 'https://raw.githubusercontent.com/vicmancb/pokemon/master/'+ getNumber(pokemon.url) +'.png'
                    };
                    self.pokemonList.push(pokemonObj);
                });
            }, function errorCallback(response) {
               console.log('esta vaina falló', response);
            });
        };

        self.find = function () {
            self.executeSearch = self.search;
        };

        loadPokemon();
    });