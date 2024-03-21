
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E','T'];

let dni=prompt("Indique los números de su dni:");
let letra=prompt("Indique la letras de su dni:");

letra.toUpperCase;

if (dni < 0 || dni > 99999999) {

    alert ("El número introducido no es válido");

}

let letraR = letras [dni % 23];

if (letra == letraR) {

    alert ("La letra introducida es la correcta")

}

if (letra != letraReal) {

    alert ("La letra introducida no es la correcta")

}