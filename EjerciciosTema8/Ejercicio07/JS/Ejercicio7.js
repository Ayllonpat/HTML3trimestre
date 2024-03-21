let numero = prompt("Introduzca un número entero para calcular su factorial:");
let factorial = 1;

for (let i= numero; i > 0; i--) {
    
    factorial*= i;
    
}

alert ("El factorial de " + numero + ", es " + factorial + ".");