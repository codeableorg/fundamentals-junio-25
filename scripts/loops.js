// "el for se va a ejecutar"
// "Mientras la variable i sea menor a 10"

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(`El valor de i es ${i}`);

// let j = 0;

// while (j < 10) {
//   console.log(j);
//   j++;
// }

// console.log(`El valor de j es ${j}`);

// let z = 1;

// do {
//   console.log(z);
//   z++;
// } while (z <= 5);

// console.log(`El valor de z es ${z}`);

// let texto = "Codeable";
// let letraObjetivo = "a";

// for (let i = 0; texto[i] !== undefined; i++) {
//   if (texto[i] === letraObjetivo) {
//     console.log(`¡Letra encontrada en la posición ${i}!`);
//     break;
//   }
// }

for (let i = 1; i <= 10; i++) {
  if (i === 4 || i === 7) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i !== 4 && i !== 7) {
    console.log(i);
  }
}
