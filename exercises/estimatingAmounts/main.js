/**
 * https://www.codewars.com/kata/584703d76f6cf6ffc6000275/train/javascript
 */

function estSubsets(arr) {
  let n = 0;
  let uniqueArray = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  let arraySize = uniqueArray.length;

  for (let i = 1; i <= arraySize; i++) {
    n += factorial(arraySize) / (factorial(i) * factorial(arraySize - i));
    // if(n!== -1) return n;
    // console.log(factorial(arraySize - i))
  }
  // console.log(factorial(0))
  // your code here
  console.log(Math.round(n)); // n = amount of subsets that don not have repeated elements
}

function factorial(n) {
  if (n === 0) return 1;
  // console.log(n)
  let num = n;
  for (let i = n - 1; i > 0; i--) {
    num *= i;
  }
  return num;
}

estSubsets([]);
