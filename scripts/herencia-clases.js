// let abuelo = {
//   apellido: "Bolivar",
// };

// let padre = Object.create(abuelo);

// let hijo = Object.create(padre);

// hijo.apellido;

function Animal(nombre, energia) {
  this.nombre = nombre;
  this.energia = energia;
}

// Métodos compartidos de Animal
Animal.prototype.comer = function (cantidad) {
  /* se omite por brevedad*/
};
Animal.prototype.dormir = function (tiempo) {
  /* se omite por brevedad*/
};
Animal.prototype.jugar = function (tiempo) {
  /* se omite por brevedad*/
};

function Perro(nombre, energia, raza) {
  //   this.nombre = nombre;
  //   this.energia = energia;
  Animal.call(this, nombre, energia);
  this.raza = raza;
}

// Indicamos que el prototipo del Perro será el prototipo de Animal
Perro.prototype = Object.create(Animal.prototype);
// Recuperamos la propiedad 'constructor' que se borró en el paso anterior
Perro.prototype.constructor = Perro;

// Listo, ya podemos crear objetos del tipo Perro (instancias de Perro)
const lazy = new Perro("Lazy", 10, "Collie");
