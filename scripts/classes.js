class Animal {
  constructor(nombre, energia) {
    this.nombre = nombre;
    this.energia = energia;
  }

  // Metodos de Clase: las intancias puedes llamar y ejecutar estos metodos
  comer(cantidad) {
    console.log(`${this.nombre} está comiendo.`);
    this.energia += cantidad;
  }
  dormir(tiempo) {
    console.log(`${this.nombre} está durmiendo.`);
    this.energia += tiempo;
  }
  jugar(tiempo) {
    console.log(`${this.nombre} está jugando.`);
    this.energia -= tiempo;
  }

  get status() {
    return `${this.nombre} tiene ${this.energia} de energía`;
  }

  set status(energia) {
    if (energia >= 0) {
      this.energia = energia;
    }
  }

  // Metodos Estaticos
  static siguienteAComer(animales) {
    const ordenadoPorMenorEnergia = animales.sort((a, b) => {
      return a.energia - b.energia;
    });

    return ordenadoPorMenorEnergia[0].nombre;
  }
}

class Perro extends Animal {
  constructor(nombre, energia, raza) {
    super(nombre, energia);
    this.raza = raza;
  }

  jugar(tiempo) {
    console.log(`${this.nombre} mueve la cola de felicidad.`);
    super.jugar(tiempo / 2);
    // super.comer(tiempo / 2);
    // super.dormir(tiempo / 2);
  }
}

const snoopy = new Perro("Snoopy", 100, "Beagle");

// const leo = new Animal("Leonardo", 100);
// const lazy = new Animal("Lazy", 10);
// const dumbo = new Animal("Dumbo", 300);

// leo.comer(10);
// lazy.dormir(50);
// dumbo.jugar(20);

// Animal.siguienteAComer([leo, lazy, dumbo]);

// function Humano(nombre, energia) {
//   this.nombre = nombre;
//   this.energia = energia;
// }

// Humano.prototype.comer = function (cantidad) {
//   console.log(`${this.nombre} está comiendo.`);
//   this.energia += cantidad;
// };

// Humano.prototype.dormir = function (tiempo) {
//   console.log(`${this.nombre} está durmiendo.`);
//   this.energia += tiempo;
// };

// Humano.prototype.jugar = function (tiempo) {
//   console.log(`${this.nombre} está jugando.`);
//   this.energia -= tiempo;
// };

// Instancia o crear una instancia:
// const julio = new Humano("Julio", 90); // {}

// console.log("Propiedades del leon:");
// for (const llave in leon) {
//   console.log(llave);
// }

// console.log("Propiedades del humano:");
// for (const key in julio) {
//   console.log(key);
// }
