// function miFuncion(callback) {
//   console.log(callback);
//   callback();
// }

// miFuncion(function () {
//   console.log("Función como argumento");
// });

// callback: una funcion que se pasa como argumento a otra funcion

// function crearMultiplicador(multiplicador) {
//   return function (numero) {
//     console.log(numero * multiplicador);
//   };
// }

// let multiplicaPor3 = crearMultiplicador(3);
// let multiplicaPor5 = crearMultiplicador(5);

// console.log(multiplicaPor3); // ??
// console.log(multiplicaPor5); // ??

// multiplicaPor3(10);
// multiplicaPor5(100);
// let resultado = multiplicaPor3(5);
// console.log(resultado); // ??

// Ejercicio 1
// Crea una función de orden superior llamada ejecutarTresVeces. Esta función debe recibir una función como argumento (cualquier función) y ejecutarla tres veces.

// function ejecutarTresVeces(callback) {
//   callback();
//   callback();
//   callback();
// }

// ejecutarTresVeces(function () {
//   console.log("Hola mundo!");
// });

// Ejercicio 2
// Crea una función de orden superior llamada creadorDeFrase. Esta función debe recibir un string "saludo" o "despedida" como argumento.

// Si el argumento es "saludo" deberá retornar una función que recibe un nombre e imprime en la consola "Hola [nombre]".
// Si el argumento es "despedida" deberá retornar una función que recibe un nombre e imprime en la consola "Chau [nombre]".

function creadorDeFrase(mensaje) {
  if (mensaje === "saludo") {
    return function (nombre) {
      console.log(`Hola ${nombre}`);
    };
  } else if (mensaje === "despedida") {
    return function (nombre) {
      console.log(`Chau ${nombre}`);
    };
  }
}

let saluda = creadorDeFrase("saludo");
let despide = creadorDeFrase("despedida");

saluda("Juan"); // Imprime "Hola Juan"
saluda("Maria"); // Imprime "Hola Maria"

despide("Miguel"); // Imprime "Chau Migue"
despide("Alejandra"); // Imprime "Chau Alejandra"
