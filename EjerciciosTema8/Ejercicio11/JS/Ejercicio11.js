let listaNumeros = pedirNumeros();

alert ("El array está compuesto por " + listaNumeros + " cuya suma es " + sumarNumeros(listaNumeros))


function pedirNumeros() {

    let dato;
    let listaDatos = new Array()
    let tam = prompt("Diga cuántos números quiere introducir")
    do {

        dato = prompt("Introduzca un número, pulse espacio únicamente para salir");
        if (dato !== '') {

            if (listaDatos.length >= tam) {

                listaDatos.shift();
            }

            listaDatos.push(dato);
        }

    }while (dato !== '');

    return listaDatos;
}

function sumarNumeros(listaNumeros) {

    let suma = 0;

    for (const numero of listaNumeros) {
        suma+= parseInt(numero);
    }

    return suma;
}