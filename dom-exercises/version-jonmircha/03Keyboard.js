const d = document;

let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = document.querySelector(ball);
  const $stage = document.querySelector(stage);
  const limitBall = $ball.getBoundingClientRect();
  const limitStage = $stage.getBoundingClientRect();

  // console.log(limitBall);
  // console.log(limitStage);

  // console.log(e.keyCode);

  // const move = (direction) => {};

  switch (e.keyCode) {
    case 37:
      // move("left");
      if (limitBall.left > limitStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      // y--;
      if (limitBall.top > limitStage.top) {
        e.preventDefault();
        y--;
      }
      // move("up");
      break;
    case 39:
      // move("right");
      if (limitBall.right < limitStage.right) {
        e.preventDefault();
        x++;
      }

      break;
    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        e.preventDefault();
        y++;
      }
      // move("down");
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcut(e) {
  // console.log(`Type: ${e.type}`);
  // console.log(`key: ${e.key}`);
  // console.log(`keyCode: ${e.keyCode}`);
  // console.log(`ctrl: ${e.ctrlKey}`);
  // console.log(`alt: ${e.altKey}`);
  // console.log(`shift: ${e.shiftKey}`);
  // console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("You have triggered an alert with the keyboard");
  }
  if (e.key === "c" && e.altKey) {
    confirm("You have triggered an confirmation with the keyboard ");
  }
  if (e.key === "p" && e.altKey) {
    prompt("You have triggered an message with the keyboard ");
  }
}
