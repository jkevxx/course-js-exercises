/**
 * 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 */
const flipString = (cadena = "") => {
  if (cadena === "") return console.warn("no debe estar vacía");

  // FIRST FORM
  // longitud = cadena.length;
  // let element = "";
  // for (let i = longitud; i > 0; i--) {
  //   element += cadena[i - 1];
  // }

  // console.log(element);

  // SECOND FORM
  // console.log(cadena.split(""))
  // console.log(cadena.split("").reverse())
  console.log(cadena.split("").reverse().join(""))

}
flipString("Hola Mundo");


/**
 * 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */
const countCharacters = (cadena = "", word = "") => {
  if (cadena === "" && word === "") return console.warn("no debe estar vacía");
  // FIRST FORM
  // let newArray = cadena.split(" ");
  // let count = 0;
  // result = newArray.map(item => {
  //   if (item === word) count++
  // })
  // console.log(count);

  // SECOND FORM
  let i = 0, contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(word, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  console.log(`La palabra ${word} se repite ${contador} veces`);

}

countCharacters("hola mundo adios mundo hola mundo hola ", "hola");



/**
 * 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 */
const palindromo = (cadena = "") => {
  if (cadena === "") return console.warn("no debe estar vacía");
  // FIRST FORM
  // longitud = cadena.length;
  // let element = "";
  // for (let i = longitud; i > 0; i--) {
  //   element += cadena[i - 1];
  // }

  // console.log(element);
  // if (cadena === element) console.log("Es un palindromo")
  // else console.log("no es un palindromo")

  cadena = cadena.toLowerCase();
  let alReves = cadena.split("").reverse().join("");
  return (cadena === alReves)
    ? console.log("Sí es palíndromo")
    : console.log("no es palíndromo")
}

palindromo("salas");


/**
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */
const deletePatron = (text = "", patron = "") => {
  if (text === "" && patron === "") return console.warn("no debe estar vacía");

  let validation = text.replace(new RegExp(patron, "ig"), "");

  console.log(validation);

}

deletePatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

