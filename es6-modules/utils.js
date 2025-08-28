// ES6 Modules
const escuela = "Codeable";

export default function saludar() {
  console.log("Hola");
}

export function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(a, b) {
  return a + b;
}

export { sumar };

// export default escuela;
