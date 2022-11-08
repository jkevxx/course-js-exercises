/**
 * https://github.com/Asabeneh/30-Days-Of-React/blob/master/01_Day_JavaScript_Refresher/01_javascript_refresher.md#exercise-level-1
 */
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "SQL",
];

function printMiddleArray(webTechs) {
  let sizeArray = webTechs.length;

  // console.log(sizeArray);
  let middleValue = Math.trunc(sizeArray / 2);

  if (sizeArray % 2 === 0) {
    console.log(`${webTechs[middleValue - 1]} and ${webTechs[middleValue]}`);
  } else {
    console.log(webTechs[middleValue]);
  }
}
// printMiddleArray(webTechs);

const LowerArray = webTechs.map((item) => item.toLowerCase());
console.log(LowerArray);
