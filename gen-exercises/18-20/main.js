/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

const checkWord = (word) => {
  // word = word.trim();
  // console.log(word);
  let numVowels = 0;
  let numConsonants = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      numVowels++;
    } else if (word[i] !== " ") {
      numConsonants++;
      // console.log(word[i]);
    }
  }

  console.log(`Number of vowels is: ${numVowels}`);
  console.log(`Number of consonants is: ${numConsonants}`);
};

// checkWord("Hola Mundo hi");

/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

const validateName = (name) => {
  const specialChar = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;

  specialChar.test(name)
    ? console.log("Valid Name")
    : console.log("Invalid Name");
};

// validateName("Kevin223");

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

const validateEmail = (email) => {
  const specialChar = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  specialChar.test(email)
    ? console.log("Valid email")
    : console.log("Invalid email");
};

validateEmail("kevin223@gmail.com");
