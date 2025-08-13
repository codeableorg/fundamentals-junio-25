const frutas = ["manzana", "platano", "naranja"];
frutas.push("fresa", "piña");
// ['manzana', 'platano', 'naranja', 'fresa', 'piña']
frutas.pop();
// ['manzana', 'platano', 'naranja', 'fresa']
frutas.unshift("mandarina", "mango");
// ['mandarina', 'mango', 'manzana', 'platano', 'naranja', 'fresa']
frutas.shift();
// (5) ['mango', 'manzana', 'platano', 'naranja', 'fresa']
frutas.splice(2, 0, "mandarina", "palta");
// (7) ['mango', 'manzana', 'mandarina', 'palta', 'platano', 'naranja', 'fresa']
frutas.splice(3, 1);
// (6) ['mango', 'manzana', 'mandarina', 'platano', 'naranja', 'fresa']
frutas.splice(1, 4);
// (2) ['mango', 'fresa']
frutas.splice(0, 1, "naranja"); // frutas[0] = "naranja";
// (2) ['naranja', 'fresa']

// Metodos Inmutables
let frutas2 = frutas.concat(["manzana", "mango", "mandarina"]);
// console.log(frutas);
console.log(frutas2);

// Metodos de verificacion
frutas2.indexOf("mango"); // 3
frutas2.indexOf("naranja"); // 0
frutas2.indexOf("palta"); // -1

// Métodos de evaluación y filtrado
frutas2.find(function (fruta) {
  return fruta === "mango";
});

// 'mango'

frutas2.find((fruta) => fruta === "naranja");

// 'naranja'

frutas2.find((fruta) => fruta === "palta");

// undefined

frutas2.every((fruta) => typeof fruta === "string");
// true

const numeros = [7, 4, 1, 3, 2, 6, 5];
numeros.sort().reverse();
// (7) [7, 6, 5, 4, 3, 2, 1]
