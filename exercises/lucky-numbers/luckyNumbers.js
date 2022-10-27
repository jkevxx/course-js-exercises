/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
  // console.log(array1);
  const newArray1 = array1.map((item) => String(item));
  const newArray2 = array2.map((item) => String(item));
  // String(array1);
  // console.log(newArray1);
  // console.log(newArray2);
  let number1 = "";
  let number2 = "";
  newArray1.forEach((element) => {
    number1 += element;
  });
  newArray2.forEach((element) => {
    number2 += element;
  });

  // console.log(number1);
  // console.log(number2);
  number1 = Number(number1);
  number2 = Number(number2);
  return number1 + number2;
}

// console.log(twoSum([1, 2, 3], [0, 7]));

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
function luckyNumber(value) {
  value = String(value);
  // console.log(value);
  const newValue = value.split("").reverse().join("");
  return value === newValue ? true : false;
  // console.log(newValue);
}

// console.log(luckyNumber(1441));

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */

function errorMessage(input) {
  let msg = "";
  console.log(input);
  if (input === "" || input === null || input === undefined)
    return (msg = "Required field");
  input = Number(input);
  console.log(input);
  if (isNaN(input)) return (msg = "Must be a number besides 0");
  if (typeof input === "number" && input > 0) {
    return (msg = "");
  } else {
    return (msg = "Must be a number besides 0");
  }
}

console.log(errorMessage("123s"));
