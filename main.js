let bebida


function bebidas(bebida){

    bebida = prompt("Elige una bebida para tomar: Vino, Gaseosa, Agua")
    return bebida;
}

prodElegido=bebidas(bebida)


const productos = ["vino", "gaseosa", "agua"];

for (var i = 0; i < productos.length; i++) {
   
    if(productos[i]==prodElegido)
    {
        console.log(productos[i]); 
        alert("Bebida elegida " + productos[i]);
        break
    } 
            

 }