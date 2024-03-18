let unArray=leerArrayPorTeclado();
alert('El array tiene'+unArray.length+' elementos y es un '+unArray)

function leerArrayPorTeclado(){
    //let continuar;
    //let dato;
    let miArray = new Array();
    /*do{
        dato=prompt("Diga algo para guardar en un array");
        continuar = dato!=='';
        if(continuar){
            miArray.push(dato);
        }
        miArray.push(dato);
    }while(dato!==''); 
    */

    let dato=prompt("Diga algo para guardar en un array");
    while(dato!=='') {
        miArray.push(dato)
        dato = prompt("Diga algo para guardar en un array");
    }

    return miArray;
}