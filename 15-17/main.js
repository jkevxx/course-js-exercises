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

const calculateDiscount =(amount, discount)=>{

}

/**
 * 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */



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
