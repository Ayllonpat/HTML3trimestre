let texto = prompt("Introduzca una cadena de texto para compronar si es un palíndromo:");

texto=texto.toLowerCase().trim();

function palindromo (texto){
    
    if(texto===texto.split("").reverse().join("")){
        alert("El texto es palíndromo")
    }
    else{
        alert("El texto no es palíndromo")
    }   
}

palindromo(texto);