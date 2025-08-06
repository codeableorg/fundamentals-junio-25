/*
function saludar() {
  console.log(`Hola, mi nombre es ${this.nombre}`);
}

const persona1 = {
  nombre: "Simon",
  saludar: saludar,
};

const persona2 = {
  nombre: "Micaela",
  saludar: saludar,
};

persona1.saludar(); // Imprime: "Hola, mi nombre es Simon"
persona2.saludar(); // Imprime: "Hola, mi nombre es Micaela"

*/

const persona = {
  nombre: "Simon",
  apellido: "Grau",
  email: "simon@mail.com",
  dni: "748373629",
  direccion: "Calle Las Flores 320",
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
  get obtenerNombre() {
    return this.nombre;
  },
  set actualizarEmail(newEmail) {
    this.email = newEmail;
  },
  set nombreCompleto(valor) {
    if (typeof valor !== "string") return;

    const partes = valor.split(" ");
    this.nombre = partes[0];
    this.apellido = partes[1];
  },
};
