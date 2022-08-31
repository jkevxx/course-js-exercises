const button1 = document.getElementById('send1');
const result1 = document.getElementById('result1');
button1.addEventListener('click', problem1);

const button2 = document.getElementById('send2');
const result2 = document.getElementById('result2');
button2.addEventListener('click', problem2);

const button3 = document.getElementById('send3');
const result3 = document.getElementById('result3');
button3.addEventListener('click', problem3);

const button4 = document.getElementById('send4');
const result4 = document.getElementById('result4');
button4.addEventListener('click', problem4);


/**
 * 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo")
    devolverá 10.
 */
function problem1() {
  const input = document.getElementById('problem1').value;
  let num = input.length
  if (parseInt(input, 10)) {
    result1.innerHTML = `solo se permiten carácteres`;
  } else {
    result1.innerHTML = `El número de caractares es: ${num}`;
  }
}


/**
 *2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.
    miFuncion("Hola Mundo", 4) devolverá "Hola".
 */
function problem2() {
  const input = document.getElementById('problem2').value;
  const inputNumber = document.getElementById('problem2num').value;
  if (inputNumber > input.length) {
    result2.innerHTML = `No se puede colocar un número más grande que el array`;
  } else {
    // let newArray = [];
    // for (let i = 0; i < inputNumber; i++) {
    //   newArray += input[i];
    // }
    let newArray = input.slice(0, inputNumber)
    result2.innerHTML = `La cadena de texto es: ${newArray}`;
  }
}


/**
 *3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
    miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
 */
function problem3() {
  const input = document.getElementById('problem3').value;
  let cadena = input.split(' ');
  if (parseInt(input, 10)) {
    result3.innerHTML = `solo se permiten carácteres`;
  } else {
    result3.innerHTML = `La cadena final es: ${cadena}`;
  }
  // console.log(num);
}


/**
 * 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo
    Hola Mundo.
 */
function problem4() {
  const input = document.getElementById('problem4').value;
  const inputNumber = document.getElementById('problem4num').value;
  if (parseInt(input, 10)) {
    result4.innerHTML = `solo se permiten carácteres`;
  } else {
    let i = 0;
    while (i < inputNumber) {
      result4.innerHTML = `${input} <br>`;
      console.log(input);
      i++;
    }

  }
}
