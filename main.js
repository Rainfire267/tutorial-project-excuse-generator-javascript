window.onload = function(){

    let first = 'Un ';
    let adj = ['molesto ', 'ansioso ', 'furioso ', 'solitario ', 'loco ', 'brillante ', 'oloroso ', 'lento ', 'viejo '];
    let noun = ['corredor ', 'gato ', 'mensajero ', 'vendedor ', 'conductor ', 'charlatán ', 'ornitorrinco '];
    let action = ['robó mi ', 'tiró mi ', 'observó mi ', 'pateó mi ', 'arrojó mi ', 'empapó mi ', 'escondió mi ', 'pintó mi '];
    let possetion = ['cartera ', 'casa ', 'mascota ', 'reloj ', 'comida ', 'llaves ', 'comida ', 'cereal ', 'jarra ', 'hamburguesa '];


    let excRand1 = Math.floor((Math.random() * adj.length));
    let excRand2 = Math.floor((Math.random() * noun.length));
    let excRand3 = Math.floor((Math.random() * action.length));
    let excRand4 = Math.floor((Math.random() * possetion.length));

    document.querySelector('#excusa').innerHTML = first + adj[excRand1] + noun[excRand2] + action[excRand3] + possetion[excRand4]
}