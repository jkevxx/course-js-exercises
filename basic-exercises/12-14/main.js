// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primeNumber = (number = undefined) => {
  // validation

  if (number === undefined) return console.warn("You don't get into a value");
  if (Math.sign(number) === -1)
    return console.error("The number mustn't be negative");

  let count = 0;
  for (let i = number; i > 0; i--) {
    // console.log(number / i)
    if (number % i === 0) {
      count++;
    }
  }
  // console.log(count)
  if (count > 2) {
    console.log("it's not prime number");
  } else {
    console.log("prime number");
  }
};

// primeNumber(15);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const isPair = (number) => {
  if (number % 2 === 0) {
    console.log("it's pair");
  } else {
    console.log("it's not pair");
  }
};

// isPair(29);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const temperature = (number, signTemp) => {
  //
  if (typeof number !== "number" || typeof signTemp !== "string") {
    return console.log("they're not valid parameters");
  }

  signTemp = signTemp.toLowerCase();

  // console.log(signTemp);

  if (signTemp === "c") {
    let temp = number * 1.8 + 32;
    console.log(`the temperature is ${temp} °F`);
  } else if (signTemp === "f") {
    let temp = (number - 32) * 0.5556;
    console.log(`the temperature is ${temp} °C`);
  } else {
    console.log("sign invalid");
  }
};

temperature(0, "c");
