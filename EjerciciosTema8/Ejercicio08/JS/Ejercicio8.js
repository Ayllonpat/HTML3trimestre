let num=prompt("Escriba un número entero:");

function parOImpar (num) {

    return num % 2;
}

if (parOImpar(num) == 0) {

    alert ("El número " + num + " es par, la función devuelve el número: " + parOImpar(num));
}

if (parOImpar(num) != 0) {

    alert ("El número " + num+ " es impar, la función devuelve el número: "+ parOImpar(num));
}