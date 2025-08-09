// Functin Declaration
function sumar(a, b) {
  return a + b;
}

// console.log(sumar(27, 87));

// Function Expression
let restar = function (a, b) {
  return a - b;
};

// console.log(restar(81, 73));

// Arrow
let multiplicar = (a, b) => a * b;
let duplicar = (a) => a * 2;
// let saludar = () => console.log("¡Hola!");

// console.log(multiplicar(7, 8));
// console.log(duplicar(10));
// saludar();

let operar = (operacion, a, b) => {
  switch (operacion) {
    case "suma":
      return a + b;
    case "resta":
      return a - b;
    case "multiplicacion":
      return a * b;
    case "division":
      return a / b;
    default:
      return "Operacion invalida";
  }
};

// console.log(operar("resta", 10, 5));
// console.log(operar("suma", 10, 5));
// console.log(operar("multiplicacion", 10, 5));
// console.log(operar("division", 10, 5));
// console.log(operar("potencia", 30, 20));

// const escuela = {
//   nombre: "Codeable",
//   mostrarNombre: () => console.log(this.nombre),
// };

// escuela.mostrarNombre();

const escuela = {
  nombre: "Codeable",
  mostrarNombre: function () {
    const funcionInterna = () => console.log(this.nombre);

    funcionInterna();
  },
};

// escuela.mostrarNombre();

function holaMundo(a, b, c, d, e = "valor por defecto") {
  console.log("Hola Mundo!");
  console.log(arguments);
}

// holaMundo(1, "hola", true, { escuela: "Codeable" });

// console.log(holaMundo.prototype);
// console.log(holaMundo.__proto__);
// console.log(holaMundo.name);
// console.log(holaMundo.length);

function saludar() {
  console.log(`¡Hola! Mi nombre es ${this.nombre}.`);
}

const usuario = {
  nombre: "Andre",
  email: "andre@mail.com",
};

// function saludo() {
//   console.log(`¡Hola! Mi nombre es ${usuario.nombre}.`);
// }

// bind
const saludo = saludar.bind(usuario);
// saludo();

function presentar(titulo, ciudad) {
  console.log(`${titulo} ${this.nombre}, de ${ciudad}.`);
}

const persona = { nombre: "Juan" };
// call
// presentar.call(persona, "Sr.", "Lima"); // Sr. Juan, de Lima.
// presentar.apply(persona, ["Sr.", "Lima"]); // Sr. Juan, de Lima.

// Rest Parameters
// function sumarTodos(...numeros) {
//   // console.log(numeros);
//   let result = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     result += numeros[i];
//   }
//   return result;
// }

// sumarTodos(1, 2, 3);
// sumarTodos(10, 20, 30, 40, 50);

function ejemplo(a, b, c = 0, ...resto) {
  console.log("Requeridos: ", a, b);
  console.log("Opcional: ", c);
  console.log("Resto: ", resto);
}

// ejemplo(10, 20, 30, 40, 50);

// Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];

// const nums = [10, 40];
// let suma = (a, b) => a + b;
// console.log(suma(...nums));

function sumarTodos(...numeros) {
  let result = 0;
  for (let i = 0; i < numeros.length; i++) {
    result += numeros[i];
  }
  return result;
}

const arr3 = [2, 4, 6, 8, 10, 12, 14, 16];
// console.log(sumarTodos(...arr3));

const datos1 = { nombre: "Juan", apellido: "Perez" };
const persona1 = { ...datos1, pais: "Mexico", ciudad: "Guadalajara" };
