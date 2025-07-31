// let llueve = false;

// if (llueve) {
//   console.log("¡Lleva un paraguas!");
// } else {
//   console.log("El día está despejado (:");
// }

// let llueve = false;
// let mensaje = llueve ? "¡Lleva un paraguas!" : "No necesitas un paraguas.";
// console.log(mensaje);

// let llueve = false;
// let mensaje; // undefined

// if (llueve) {
//   mensaje = "¡Lleva un paraguas!";
// } else {
//   mensaje = "No necesitas un paraguas.";
// }

// console.log(mensaje);

// Operador Ternario
// condición ? expresiónSiTruthy : expresiónSiFalsy;

// let temperatura = 29;

// if (temperatura > 30) {
//   console.log("Hace demasiado calor");
// } else if (20 < temperatura && temperatura <= 29) {
//   console.log("Hace calor.");
// } else if (10 < temperatura && temperatura <= 20) {
//   console.log("Hace frío.");
// } else {
//   console.log("Hace demasiado frio");
// }

// 20 < temperatura <= 29;
// 20 < temperatura && temperatura <= 29;
// arriba de 30: calor extremo
// entre 20 y 29: hace calor
// 10 y 19: hace frio
// menores a 9: hace demasiado frio

// Switch

function diaDeLaSemana(numero) {
  if (numero === 1) {
    return "Lunes";
  } else if (numero === 2) {
    return "Martes";
  } else if (numero === 3) {
    return "Miércoles";
  } else if (numero === 4) {
    return "Jueves";
  } else if (numero === 5) {
    return "Viernes";
  } else if (numero === 6) {
    return "Sábado";
  } else if (numero === 7) {
    return "Domingo";
  } else {
    return "Número inválido";
  }
}

function diaDeLaSemanaSwitch(numero) {
  switch (numero) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Número inválido");
  }
}

// diaDeLaSemanaSwitch(99);

let dia = "sábado";

switch (dia) {
  case "lunes":
    console.log("¡Es lunes! Vamos a planificar la semana.");
    break;
  case "viernes":
    console.log("Casi fin de semana... ¡Vamos a relajarnos un poco!");
    break;
  case "sábado":
  case "domingo":
    console.log("¡Es fin de semana! Tiempo para descansar.");
    break;
  default:
    console.log("Un día para seguir aprendiendo.");
}

/*
function imprimirDiaDeLaSemana(numero) {
  if (numero === 1) {
    console.log("Lunes");
  } else if (numero === 2) {
    console.log("Martes");
  } else if (numero === 3) {
    console.log("Miércoles");
  } else if (numero === 4) {
    console.log("Jueves");
  } else if (numero === 5) {
    console.log("Viernes");
  } else if (numero === 6) {
    console.log("Sábado");
  } else if (numero === 7) {
    console.log("Domingo");
  } else {
    console.log("Número inválido");
  }
}

imprimirDiaDeLaSemana(1);
imprimirDiaDeLaSemana(2);
imprimirDiaDeLaSemana(3);
imprimirDiaDeLaSemana(4);
imprimirDiaDeLaSemana(5);
imprimirDiaDeLaSemana(6);
imprimirDiaDeLaSemana(7);
imprimirDiaDeLaSemana(8);
imprimirDiaDeLaSemana(false);
imprimirDiaDeLaSemana(null);

*/
