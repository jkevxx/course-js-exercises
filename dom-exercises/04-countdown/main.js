const showCountdown = document.getElementById("countdown");
const deadline = new Date(2023, 2, 24, 11, 21, 0);

let intervalCountdown = setInterval(() => {
  let actualDate = new Date();

  let remainTime = (deadline - actualDate + 1000) / 1000;

  let days = Math.floor(remainTime / (3600 * 24));
  let hours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
  let minutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
  let seconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
  // console.log(seconds);

  showCountdown.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  // console.log(remainTime);
  if (remainTime <= 1) {
    clearInterval(intervalCountdown);
    showCountdown.innerHTML = "It's time";
  }
}, 1000);
