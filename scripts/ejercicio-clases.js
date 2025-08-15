class Hechicero {
  constructor(nombre, casa) {
    this.nombre = nombre;
    this.casa = casa;
  }
}

class Profesor extends Hechicero {
  constructor(nombre, casa, materia, añosExperiencia) {
    super(nombre, casa);
    this.materia = materia;
    this.añosExperiencia = añosExperiencia;
  }

  enseñar() {
    console.log(
      `El profesor ${this.nombre} de la casa ${this.casa} enseña ${this.materia}.`
    );
  }
}

const andre = new Profesor("André", "Codeable", "Programación", 3);
andre.enseñar();
const snape = new Profesor("Snape", "Slitherin", "Artes Oscuras", 50);
snape.enseñar();
