// let numero1 = parseInt(prompt("escribe el primero numero"))
// let numero2 = Number(prompt("escribe el segundo numero"))
let lista = [15,15,12,12,14,14,16,16,15,88,99,11,0,13,13]
let cadena = "soynarmarina"
let cadena2 = "megustaprogramar"

// function sumarNumeros( numero1, numero2){
//   return numero1+numero2
// }

// console.log(`resultado:${sumarNumeros(numero1,numero2)}`)

// Definir una función que tome una lista como argumento y devuelva la suma de todos sus elementos.

/* function sumarLista(lista){
    suma= 0
//   recorrer la lista
   for (let i = 0; i< lista.length; i++)
    suma += lista[i]
    console.log(suma)
}

sumarLista(lista) */

// Escribir una función que reciba una lista de números y devuelva el mayor de ellos.
/*  function numeroMayor(lista){
    mayor = lista[0]
   for (let numero= 0; numero < lista.length; numero++)
      
    if (mayor < lista[numero]){
        mayor = lista[numero]
        
    }
    console.log(mayor)
 }

 numeroMayor(lista) */

//  como funciona esta solucion?
// funciona como si el numero en la posiciòn o fuese el mayor
// si alguno toma cumple la condiciòn toma el lugar del mismo
//  se hace la comparación
//  mayor < lista[numero] osea (15< 12)
//  no asi que sigue
// 15 < 6 no
// 15 < si
// asi que 18 toma la posición lista[0]
// y es el mayor

// Ahora retonarà el numero menor de la lista
// function menorLista(lista){
//     menor = lista[0]
//     for (let num= 0; num < lista.length;num++ ){
//         if (menor > lista[num]){
//             menor = lista[num]
//         }
//     }
//     console.log(menor)
// }
// menorLista(lista)

// explicacion de este caso
//toma el numero en la posicion 0 como el menor
// y compara si hay otro menor que el
// el numero en la posicion 0 es mayor que numero en las otras posiciones?
// 15 > 12 no
// 15 > 6 si el 6 esta ahora en la posicion 0
// 6 > 18 no
// 6 > 25 no
// 6 > 30 no
//el menor entonces serà el 6


// numero maximo y minimo con el metodo Math.min() Math.max()
/*  function arrojarMaxAndMin(lista){
    let numeroMinimo = Math.min(...lista)
    let numeroMaximo = Math.max(...lista)
    console.log(numeroMaximo, numeroMinimo)
 }

arrojarMaxAndMin(lista)
 */

// Crear una función que tome una cadena de texto y devuelva su longitud.
/* function cadenaLongitud(cadena){
    
     return cadena.length
}

console.log(cadenaLongitud(cadena)) */

// REcorrer una cadena de caracteres

/* function contarCadena(cadena){
    
    cadena = cadena.toLowerCase()
    for(let letra = 0; letra < cadena.length; letra++){
         console.log(cadena[letra])
       }
    
}
contarCadena(cadena) */

// Escribir una función que tome dos números como argumentos y devuelva el mayor de ellos.
 /* function numeroMayor(numeroUno, numeroDos){
    if  (numeroUno > numeroDos){
        console.log(numeroUno)
    }else{
         console.log(numeroDos)
    }
 }

numeroMayor(18123,996) */

// Crear una función que tome una lista de números como argumento y devuelva una nueva lista con los elementos ordenados de menor a mayor.

/* function ordenarNumeros(lista){
    menor= lista[0]
    orden = []
    for(let numero = 0; numero < lista.length;numero++){
        if (lista[numero]< menor){
              menor = lista[lista[numero]]
             orden.push(menor)
        } else if (lista[numero]> menor){
                 menor = menor
        }
        
    }
    console.log(orden)
}
    

ordenarNumeros(lista) */

// utilizando el metodo sort
/* 
function ordenaNumerosMenorMayor(lista){
    return  lista.sort()
}
console.log(ordenaNumerosMenorMayor(lista)) */

// Definir una función que reciba una lista de palabras y devuelva la concatenación de todas ellas.

/* function concatenacionPalabras(){
   let  palabras = ["mariana","bety"]

    let concatenacion = palabras[0] + palabras[1]
    console.log(concatenacion)
}
concatenacionPalabras() */

// Escribir una función que reciba una cadena de texto y devuelva la misma cadena pero en mayúsculas.

/* function cadenaTxtMayuscula( cadena){
  return cadena.toUpperCase()
}
 console.log(cadenaTxtMayuscula(cadena)) */

//Definir una función que tome una lista de números como argumento y devuelva el promedio de todos ellos.
/* 
function calcularPromedio(lista){
    let suma = 0
    let promedio = 0
    for( let numero= 0; numero< lista.length; numero++){
         suma += lista[numero]
         promedio = suma/lista.length
         
    }
    console.log(promedio)
}
calcularPromedio(lista) */

//Escribir una función que reciba una lista de números y devuelva una lista con los números pares de la lista original.

/* function devolverNumerosPares(lista){
    par = []
    for(let numm=0; numm< lista.length; numm++){
        if (lista[numm] % 2 == 0){
            par.push(lista[numm])
        }
    } console.log(par)
}

devolverNumerosPares(lista) */


//Definir una función que reciba una lista de números como argumento y devuelva el producto de todos ellos.

/* function devolverProductoLista(lista){
   multiplicar = 1
   for(let o = 0; o< lista.length; o++){
      multiplicar *= lista[o]
     
   } console.log(multiplicar)

}
devolverProductoLista(lista) */

//Escribir una función que reciba una lista de palabras y devuelva la cantidad de palabras que tienen más de 5 letras.

function listaPalabras(){
    
    let = palabrasLetras ["margarita","gregorio","amanda","floresrojas"]

}

function mulplicarNumeros(num,num2){
    return num * num2

}
console.log(mulplicarNumeros(14,88))

//Definir una función que reciba una lista de números como argumento y devuelva una lista con los números impares de la lista original.

/* function numerosImpares(lista){
    impares = []
    for(let i = 0; i < lista.length; i++){
        if (lista[i] % 2 != 0){
        impares.push(lista[i])
        }
    } console.log(impares)
   
}
numerosImpares(lista) */

//Escribir una función que reciba una lista de números y devuelva una lista con los elementos únicos de la lista original (eliminando duplicados).

/* function numerosUnicos(lista){
    let numeroUnico = lista[0]
    unicos = []

    for(let i = 0; i<lista.length;i++){
         if (unicos.includes(lista[i])){
            unicos.pop(lista[i])
         }else {
            unicos.push(lista[i])
         }
    }console.log(unicos)


}
numerosUnicos(lista) */

//Crear una función que tome una cadena de texto como argumento y devuelva la misma cadena pero con todas las vocales reemplazadas por 'x'.

/* function remplazarVocales(cadena){
    return cadena.replace(/[aeiou]/gi,"X")

}

console.log(remplazarVocales(cadena)) */

//Definir una función que reciba una lista de números como argumento y devuelva el número más pequeño y el más grande de la lista en una tupla.

function numeroMinAndMax(lista){
  numeroMaximo = Math.min(...lista)
  numeroMinimo = Math.max(...lista)

  console.log(numeroMaximo, numeroMinimo)
}

numeroMinAndMax(lista)

//Escribir una función que reciba dos cadenas de texto como argumentos y devuelva la concatenación de ambas, separadas por un espacio

/* function concatenarCadenas(cadena,cadena2){
    return cadena + " " + cadena2

}

console.log(concatenarCadenas(cadena,cadena2)) */
//Crear una función que tome una lista de números como argumento y devuelva la lista invertida (es decir, en orden inverso).

function invertirOrden(lista){
    

}