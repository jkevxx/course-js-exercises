let horizontalCounter = 0;
let verticalCounter = 0;
const element = document.getElementById("element");
// console.log(element.offsetHeight);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    horizontalCounter += 10;
    // console.log("Horizontal " + horizontalCounter);
    element.style.left = `${horizontalCounter}px`;
  }

  if (e.code === "ArrowLeft") {
    horizontalCounter -= 10;
    // console.log("Horizontal " + horizontalCounter);
    element.style.left = `${horizontalCounter}px`;
  }
  if (e.code === "ArrowUp") {
    verticalCounter -= 10;
    element.style.top = `${verticalCounter}px`;
  }
  if (e.code === "ArrowDown") {
    verticalCounter += 10;
    element.style.top = `${verticalCounter}px`;
  }
});
