"use strict";

var gano, empato, perdio;
gano = 0;
empato = 0;
perdio = 0;
var selectOption = function(user){
    console.log(user);

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

    console.log('gano: ' + gano);
    console.log('empato: ' + empato);
    console.log('perdio: ' + perdio);

    // var test = document.getElementById('gano');
    // test.innerHTML = "test";

    $('#gano').html(gano);
    $('#perdio').html(perdio);
    $('#empato').html(empato);


};