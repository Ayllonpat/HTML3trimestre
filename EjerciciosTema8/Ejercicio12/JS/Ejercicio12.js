let listaNumeros=[1,5,4,3,2];

function ordenar(listaNumeros){
    
    listaNumeros=listaNumeros.sort();

    for (let num of listaNumeros) {

        alert(num);
    }
}

ordenar(listaNumeros);