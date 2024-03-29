/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

const square = (numbers) => {
  const totalSquare = numbers.map((number) => number * number);
  console.log(totalSquare);
};

// square([1, 4, 5]);

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

const orderNumbers = (numbers) => {
  let sizeArray = numbers.length;
  let newArrayNumbers = [];

  numbers.sort((a, b) => a - b);
  newArrayNumbers.push(numbers[sizeArray - 1]);
  newArrayNumbers.push(numbers[0]);
  // console.log(`[${numbers[sizeArray - 1]}, ${numbers[0]}]`);
  console.log(newArrayNumbers);
};

// orderNumbers([1, 4, 5, 99, -60]);

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const findEvenOdd = (numbers) => {
  const even = numbers.filter((number) => number % 2 === 0);
  const odd = numbers.filter((number) => number % 2 !== 0);
  // console.log(even);
  // console.log(odd);
  const values = {
    even: even,
    odd: odd,
  };
  console.log(values);
};

findEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
