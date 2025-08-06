const peru = {
  regiones: ["Costa", "Sierra", "Selva"],
  continente: "América",
  "tiene Folklore": true,
  habitantes: 32000000,
  esDesarrollado: false,
};

// const obj = {};
// Acceder a un valor
// console.log(peru.regiones);
// console.log(peru.continente);
// console.log(peru["tiene Folklore"]);

// console.log(peru.proximasElecciones); // undefined
// Crear una nueva llave con su respectivo valor:
// peru.proximasElecciones = 2026;
// Actualizar un valor dentro del objeto:
// peru.habitantes = 33000000;

// let detective: {
// };

let sherlock = {
  apellido: "Holmes",
  direccion: { ciudad: "Londres" },
};

let john = {
  apellido: "Watson",
  direccion: sherlock.direccion,
};

// john.__proto__ = sherlock;
// john.direccion = { ciudad: "Nueva York" };

// console.log(sherlock.direccion.ciudad); // "Londres"
// sherlock.direccion === john.direccion; // true

// A raiz de la pelea:
// john.apellido = "Lennon";
// john.direccion.ciudad = 'Nueva York';
// john.direccion = { ciudad: "Nueva York" };

// console.log(sherlock.apellido); // ?
// console.log(sherlock.direccion.ciudad); // ?
// console.log(john.apellido); // ?
// console.log(john.direccion.ciudad); // ?

// const persona = {
//   nombre: "André",
//   saludar: function () {
//     console.log("Hola!");
//   },
// };

// const pokemon = {
//   especie: "Pikachu",
//   saludar() {
//     console.log("Pikachu saluda");
//   },
// };

// persona.saludar();
// pokemon.saludar();

// function pikachuSaluda() {
//   console.log("Pikachu saluda");
// }

// const pokemon = {
//   especie: "Pikachu",
//   saludar: pikachuSaluda,
// };

// const persona = {
//   nombre: "Andre",
//   saludar: pikachuSaluda,
// };

// pokemon.saludar();
// persona.saludar();

// Sintaxis moderna:
// const calculadora = {
//   suma(a, b) {
//     return a + b;
//   },
//   resta() {},
//   multiplica() {},
//   divide() {},
// };

// Ejercicio:

const calculadora = {
  suma: function (a, b) {
    const resultado = a + b;
    return resultado;
  },
  resta: function (a, b) {
    return a - b;
  },
  multiplica: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

console.log(calculadora.suma(100, 20)); // 120
console.log(calculadora.resta(100, 20)); // 80
console.log(calculadora.multiplica(100, 20)); // 2000
console.log(calculadora.divide(100, 20)); // 5
