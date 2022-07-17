const numbers = {
  a: 1,
  b: 2,
  c: 3,
};

function myFunction(a, b) {
  return a.hasOwnProperty(b);
  // return b in a
}

console.log(myFunction(numbers, "b"));
