let notas = ["Jurado1", 4.56,  "Jurado2", null, "Jurado3", 9.28, "Jurado4", 3.34, "Jurado5", 5.9, "Jurado6", 7.32];
let listaNumeros=[1,5,4,3,2];
let jurados= 'PedroPérez:3.56#Jurado2:7.98#Antonio López:5.67#Anónimo 4:4.28#Jurado5:9.79';

function redondearElementos(array){

    for (let texto of notas) {
        
        if(typeof(texto) == "number"){

            notaRedondeada=Math.round(texto);
            alert(notaRedondeada); 
        }
       
    }
}

redondearElementos(notas);

function eliminarExtremos(array){

    listaNumeros=listaNumeros.sort();

    let min=Math.min(listaNumeros);
    let max = Math.max(listaNumerosnumeros);
    
    resultado = listaNumeros.filter(num => num != min);
    resultado = listaNumeros.filter(num => num != max);

    alert(listaNumeros);

}

eliminarExtremos(listaNumeros);

function parsearNotas(jurados){
    jurados.split('#')
    alert(jurados)
    for(let nota of jurados){   
        if(typeof(nota) == "number"){

            alert(nota); 
        }
    }
}

parsearNotas(jurados)