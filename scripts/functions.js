// Expresion de Funcion (Function Expression)

// const multiplicarDosNumeros = function (num1, num2) {
//   const resultado = num1 * num2;
//   return resultado;
// };

// let multiplicar = multiplicarDosNumeros;

// Declaracion de una funcion (Function Declaration)
// function sumarDosNumeros(n1, n2) {
//   const suma = n1 + n2;
//   return suma;
// }

// llaves { }
// 1. para crear objetos
// 2. para crear un bloque de codigo

// Scope (alcance)

// const r = sumarDosNumeros(12, 13);
// console.log(r);

// const promedio = r / 5;
// console.log(promedio);

// console.log(sumarDosNumeros(5, 10));
// console.log(sumarDosNumeros(9, 7));
// console.log(sumarDosNumeros(2, 2));
// console.log(multiplicarDosNumeros(7, 8));
// console.log(multiplicar(5, 10));

// let saludar = function (persona) {
//   return `Hola, ${persona} 👋🏼`;
// };

// let saludo = saludar("Sofia");
// let bienvenida = saludar("Jose Miguel");

// let manzana = {};
// let pera = manzana;
// let naranja = pera;
// pera = {};

// let nombre = "Sebastian";

// function saludar(nombre) {
//   console.log(`Hola ${nombre}`);
// }

// saludar(nombre);

// function crearUsuario(nombre = "Anónimo", edad = 18) {
//   console.log(nombre, edad);
// }

// crearUsuario("Pedro");
// crearUsuario();
// crearUsuario(27);
// crearUsuario("Luis", 25, "987654321", "Mexico");

function crearSaludo(nombre) {
  console.log("Hola");
  return "Hola " + nombre + ". Qué gusto verte";

  console.log("Ojalá me devuelvas el libro que te presté"); // No se ejecuta
  return "Quiero mi libro!!!!"; // No se ejecuta
}

console.log(crearSaludo("Walter"));
