let bebida
let comida
let postre

function bebidas(bebida){

    bebida = prompt("Elige una bebida para tomar: Vino, Gaseosa, Agua")
    return bebida;
}

prodElegido=bebidas(bebida)


const productos = ["vino", "gaseosa", "agua"];

for (let i = 0; i < productos.length; i++) {
   
    if(productos[i]==prodElegido)
    {
        console.log(productos[i]); 
        alert("Bebida elegida " + productos[i]);
        break
    } 
            

 }


function comidas(comida){

    comida = prompt("Elige una comida para comer: carne, pollo, arroz")
    return comida;
}

comestiblesElegido=comidas(comida)

const comestibles = ["carne", "pollo", "arroz"];

for (let i = 0; i < comestibles.length; i++) {
   
    if(comestibles[i]==comestiblesElegido)
    {
        console.log(comestibles[i]); 
        alert("comida elegida " + comestibles[i]);
        break
    } 

     }