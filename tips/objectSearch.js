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

// delete a property of an object

const pizza = {
  ingredient: "ham york",
  fruit: "pineapple",
};

const { fruit, ...pizzaWithoutPineapple } = pizza;
console.log(pizzaWithoutPineapple);
