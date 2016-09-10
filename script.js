"use strict";

var gano, empato, perdio;
gano = 0;
empato = 0;
perdio = 0;

var miAjax = function(){
    console.log('peticion http');
    // $.ajax('https://restcountries.eu/rest/v1/all')
    $.ajax({
        method: "GET",
        url: "https://restcountries.eu/rest/v1/all"
    })
        .done(function(response) {
            $.each(response, function(index, country){
                var elemCountry = '<div>Nombre: ' + country.name + '<br>' +
                    'Capital: ' + country.capital + '</div> ';
                $('#countries').append(elemCountry);

                var langList = '';
                $.each(country.languages, function (index, lang) {
                    langList += lang + ', ';
                });
                console.log(country.name + ': ', langList);
            });
        })
        .fail(function() {
            console.log( "error" );
        })
        .always(function() {
            console.log( "complete" );
        });
};


var selectOption = function(user){

    miAjax();

    var rand = Math.floor(Math.random()*3+1);
    var opt = ['Piedra','Papel','Tijera'];
    var mach = opt[rand];

    if(user === 'Piedra'){
        if(mach === 'Papel'){
            perdio++;
        }
        else if(mach === 'Tijera'){
            gano++;
        }
        else
            empato++;
    }
    else if(user === 'Papel'){
        if(mach === 'Piedra'){
            gano++;
        }
        else if(mach === 'Tijera'){
            perdio++;
        }
        else
            empato++;
    }
    else {
        if(mach === 'Piedra'){
            perdio++;
        }
        else if(mach === 'Papel'){
            gano++;
        }
        else
            empato++;
    }

    $('#gano').html(gano);
    $('#perdio').html(perdio);
    $('#empato').html(empato);


};