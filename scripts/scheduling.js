// setTimeout

// setTimeout(callback, [retraso], [...args])

function saludar(nombre = "mundo") {
  console.log("Hola " + nombre);
}

// saludar("André");
// const timerId = setTimeout(saludar, 3000, "André");
// const timerId = setTimeout(() => saludar("André"), 3000);

// console.log(timerId); // 1
// clearTimeout(timerId);

// setInterval
// setInterval(callback, [retraso], [...args]);

// let contador = 0;

// const timerId = setInterval(() => console.log(contador++), 2000);
// setTimeout(() => clearInterval(timerId), 20000);

console.log("Antes de la planificación");

setTimeout(() => console.log("Tarea programada"), 0);

console.log("Después de la planificación");

console.log("Mucho después de la planificación");
