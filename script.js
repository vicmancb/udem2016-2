"use strict";

var pokemonList = [];


var getNumber = function(url){
    var arr  = url.split('/');
    return arr[arr.length - 2];
};

var render = function (pokemon) {
    var pokemonElement = '<div class="col-md-3"> ' +
        '<div class="poke-ball"> ' +
        '<img src="' + pokemon.img + '"> ' +
        '<span>' + pokemon.name + '</span> ' +
        '</div>' +
        '</div>';
    $('#list').append(pokemonElement);
};

var loadPokemon = function(){
    $.ajax({
        method: "GET",
        url: "https://udem.herokuapp.com/parcial"
    })
        .done(function(response) {
            $.each(response.results, function (index, pokemon) {
                var pokemonObj = {
                    name : pokemon.name,
                    img : 'https://raw.githubusercontent.com/vicmancb/pokemon/master/'+ getNumber(pokemon.url) +'.png'
                };
                pokemonList.push(pokemonObj);
                render(pokemonObj);
            });
        });
};

var find = function () {
    var text = $('#search').val();
    $('#list').html('');
    $.each(pokemonList, function (index, pokemon) {
        if(pokemon.name.includes(text)){
            render(pokemon);
        }
    });
};

loadPokemon();