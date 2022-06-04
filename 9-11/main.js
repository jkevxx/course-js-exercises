/**
 * 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */


function numRandom() {
  return Math.round(Math.random() * (600 - 501) + 500);
}

console.log(numRandom());

// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.round(Math.random() * 10));

/**
 * 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */

function validateCap(num) {
  console.log(num)
  if (num === undefined) console.log('this variable is undefined')

  // if (num !== '') {
  // } else {
  //   console.log("Need to insert a number")
  // }
}

validateCap(3)


/**
 * 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */