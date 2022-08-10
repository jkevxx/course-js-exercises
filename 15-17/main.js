/**
 * 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
 */

const convertBinary = (number = undefined, characterBase = undefined) => {
  if (number === undefined || characterBase === undefined)
    return console.log("empty values");

  if (characterBase === 10) {
    let arrayBinary = [];
    while (number > 0) {
      arrayBinary.push(Math.trunc(number % 2));
      number = Math.trunc(number / 2);
    }
    let binaryNumber = arrayBinary.reverse().join("");
    console.log(`binary: ${binaryNumber}`);
  }

  // if (characterBase === 2) {
  //   let arrayBinary = number.toString().split("");
  //   let decimalNumber = 0;
  //   // console.log(arrayBinary.length);
  //   let flag = arrayBinary.length - 1;
  //   console.log(2 ^ flag);
  //   for (let i = 0; i < arrayBinary.length; i++) {
  //     // console.log(flag);
  //     decimalNumber = arrayBinary[i] * (2 ^ flag);
  //     flag--;
  //     // console.log(decimalNumber);
  //   }
  // }

  if (characterBase === 2) {
    console.log(
      `${number} base ${characterBase} = ${parseInt(number, characterBase)}`
    );
  }
};

// convertBinary(10, 2);

/**
 * 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
 */

const calculateDiscount = (amount = undefined, discount = undefined) => {
  if (amount === undefined || discount === undefined)
    return console.error("Empty values");

  if (typeof amount !== "number" || typeof discount !== "number")
    return console.error("it must be numbers");

  if (amount === 0) return console.error("amount mustn't be zero");

  if (Math.sign(discount) === -1)
    return console.error("Discount mustn't be negative");

  let finalDiscount = amount * ((100 - discount) / 100);

  console.log(`Final discount: $${finalDiscount}`);
};

// calculateDiscount(200, 20);

/**
 * 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 * Math.sign validate if there is a number positive return 1, negative return -1 or zero return 0
 * Math.abs return a number without negative sign
 */

const calculateYears = (newDate = undefined) => {
  if (newDate === undefined) return console.warn("Empty values");

  if (!(newDate instanceof Date))
    return console.error("It isn't validate date");

  let todayLessDate = new Date().getTime() - newDate.getTime();
  let yearsInMonths = 1000 * 60 * 60 * 24 * 365;

  let humanYears = Math.floor(todayLessDate / yearsInMonths);

  return Math.sign(humanYears) === -1
    ? console.info(
        `Missing ${Math.abs(humanYears)} years to ${newDate.getFullYear()}`
      )
    : Math.sign(humanYears) === 1
    ? console.info(
        `${humanYears} years have passed since ${newDate.getFullYear()}`
      )
    : console.info(`Current year ${newDate.getFullYear()}`);
};

calculateYears(new Date(1996, 07, 08));

/**
 * interview test
 */

const countingValleys = (
  numberOfSteps = undefined,
  sequenceSteps = undefined
) => {
  // Validations
  if (numberOfSteps === undefined || sequenceSteps === undefined)
    return console.error("missing values");

  if (typeof numberOfSteps !== "number" || typeof sequenceSteps !== "string")
    return console.error("invalid values");

  if (numberOfSteps <= 2)
    return console.error("we cannot calculate number of valleys");

  sequenceSteps = sequenceSteps.toLowerCase();

  const specialChars = /^[u|d]+$/;
  if (!specialChars.test(sequenceSteps))
    return console.error("invalid characters");

  let numValleys = 0;
  let numElevation = 0;
  let reachBelow = true;

  // we go through the sequence
  for (let i = 0; i < numberOfSteps; i++) {
    if (sequenceSteps[i] === "u") {
      numElevation++;
    } else {
      numElevation--;
    }
    // console.log(numElevation);

    if (numElevation < 0 && reachBelow) {
      numValleys++;
      reachBelow = false;
    }

    if (numElevation === 0) {
      reachBelow = true;
    }
  }
  // console.log("num:" + numValleys);
  // console.log(numElevation);
  return numValleys;
};

// let numOfValleys = countingValleys(8, "UDDDUDUU");
// console.log(`The number of valleys is: ${numOfValleys}`);
