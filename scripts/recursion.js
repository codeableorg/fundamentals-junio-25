// 5!
// 5 * 4 * 3 * 2 * 1 = 120
// n! = n * (n - 1)!
// 5! = 5 * 24
// 4! = 4 * 6
// 3! = 3 * 2
// 2! = 2 * 1
// 1! = 1 * 1
// 0! = 1

// funcion recursiva
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

const resultado = factorial(3);
console.log(resultado);
