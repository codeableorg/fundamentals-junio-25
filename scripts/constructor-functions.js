/*
let animal = {};
animal.nombre = "Leo";
animal.energia = 10;

animal.comer = function (cantidad) {
  console.log(`${this.nombre} está comiendo.`);
  this.energia += cantidad;
  // animal.energia = animal.energia + cantidad;
};

animal.dormir = function (tiempo) {
  console.log(`${this.nombre} está durmiendo.`);
  this.energia += tiempo;
};

animal.jugar = function (tiempo) {
  console.log(`${this.nombre} está jugando.`);
  this.energia -= tiempo;
};
*/

// Funciones Constructoras:
function Animal(nombre, energia) {
  this.nombre = nombre;
  this.energia = energia;
}

Animal.prototype.comer = function (cantidad) {
  console.log(`${this.nombre} está comiendo.`);
  this.energia += cantidad;
};

Animal.prototype.dormir = function (tiempo) {
  console.log(`${this.nombre} está durmiendo.`);
  this.energia += tiempo;
};

Animal.prototype.jugar = function (tiempo) {
  console.log(`${this.nombre} está jugando.`);
  this.energia -= tiempo;
};

// Instancia o crear una instancia:
const leon = new Animal("Leonardo", 100);
const elefante = new Animal("Dumbo", 300);
const jirafa = new Animal("Rosi", 60);
