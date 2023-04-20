export default function draw(btn, selector) {
  const getWinner = (selectorArray) => {
    const $players = document.querySelectorAll(selectorArray);
    let random = Math.floor(Math.random() * $players.length);
    let winner = $players[random];

    // console.log($players);
    // console.log(random);

    return `The winner is: ${winner.textContent}`;
  };

  document.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}
