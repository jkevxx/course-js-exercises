/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const orderArray = (numbers) => {
  let ascending = numbers;
  let descending = numbers;
  // console.log(numbers);
  console.log(`Asc: ${ascending.sort((a, b) => a - b)}`);
  console.log(`Desc: ${descending.sort((a, b) => b - a)}`);
  // console.log(descending.sort((a, b) => b - a));
};

// orderArray([7, 5, 7, 8, 6]);

/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

const deleteDuplicate = (array) => {
  console.log(
    array.filter((item, index) => {
      // console.log(index);
      console.log(array.indexOf(item), index);
      return array.indexOf(item) === index;
    })
  );
};

// deleteDuplicate(["x", 10, "x", 2, "10", 10, true, true]);
//              [0,   1,   2,  3,  4,   5,   6,     7]

/*26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

const average = (numbers) => {
  const sumTotal = numbers.reduce((value, number) => value + number);
  // sumTotal/numbers.length;
  console.log(sumTotal / numbers.length);
};

average([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
