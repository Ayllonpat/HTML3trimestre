let texto = prompt ("Introduzca una cadena de texto con o sin mayúsculas");

function mayusOMinus (texto) {

    if (texto === texto.toUpperCase()) {

        alert ("El texto está formado únicamente por mayúsculas");

    }

    else if (texto === texto.toLowerCase()) {

        alert ("El texto está formado únicamente por minúsculas");

    }

    else {

        alert ("El texto está formado por ambas, mayúsculas y minúsculas");
        
    }

}

mayusOMinus(texto);