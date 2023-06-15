// first option

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }

//   return num * factorial(num - 1);
// }

// console.log(factorial(4));

// second option

function factorial(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(4));
