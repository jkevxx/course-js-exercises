/**
 * When it's just let data = "kevin", includes method check the letter we passed, * and return false or true depend of the letter, but in array elements check all * word
 * example: const pets = ['cat', 'dog', 'bat'];
 * pets.includes('cat'); true
 * pets[0].includes('c'), true
 *
 * https://adventjs.dev/challenges
 */

const sheeps = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

const countSheep = (sheeps) => {
  const sheepLetter = sheeps.filter(
    (sheep) =>
      sheep.name.toUpperCase().includes("N") &&
      sheep.name.toUpperCase().includes("A")
  );

  const sheepColor = sheepLetter.filter((sheep) => sheep.color === "rojo");
  console.log(sheepLetter);
  console.log(sheepColor);
};

console.log(countSheep(sheeps));
