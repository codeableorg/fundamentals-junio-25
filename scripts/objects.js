// const peru = {
//   regiones: ["Costa", "Sierra", "Selva"],
//   continente: "América",
//   "tiene Folklore": true,
//   habitantes: 32000000,
//   esDesarrollado: false,
// };

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

// let sherlock = {
//   apellido: "Holmes",
//   residencia: { ciudad: "Londres" },
// };

// let john = {
//   apellido: "Watson",
//   direccion: sherlock.direccion,
// };

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

const persona = {
  nombre: "André",
  saludar: function () {
    console.log("¡Hola!");
  },
};

persona.saludar();
