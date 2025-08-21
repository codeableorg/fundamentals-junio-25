// consolelog("Hola Mundo!"); // ReferenceError
// console.lg("Hola Mundo!"); // TypeError
// const year;                  // SyntaxError

/*
console.log("Antes del saludo");

try {
  setTimeout(() => {
    console.log(saludo);
    console.log("Despues del error!");
  }, 1000);
} catch (error) {
  console.error("Se detectó un error");
}

console.log("Después del saludo");
*/

/*
setTimeout(() => {
  try {
    console.log(saludo);
  } catch (error) {
    console.log("Se detectó un error");
  }
}, 1000);

console.log("Después del saludo");
*/

// function saludar(nombre) {
//   if (nombre === undefined) {
//     const error = new Error("No se proporciono ningun argumento");
//     throw error;
//   }

//   console.log("Hola " + nombre);
// }

// try {
//   saludar();
// } catch (error) {
//   //   console.log(error.message);
//   renderLoginPage();
// }

// console.log("El programa continua su ejecucion...");

function realizarTrabajo() {
  try {
    console.log("Empezar trabajo peligroso");

    // retorno explicito
    return "Material radioactivo encontrado";
  } catch (error) {
    console.log("Manejo el error:", error.message);
  } finally {
    console.log("Finalizar trabajo peligroso");
  }
}

realizarTrabajo();
