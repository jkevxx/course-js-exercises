const btnStartClock = document.getElementById("startClock");
const btnStopClock = document.getElementById("stopClock");
const btnStartAlarm = document.getElementById("startAlarm");
const btnStopAlarm = document.getElementById("stopAlarm");
const showTime = document.getElementById("showTime");

let clockInterval;
let alarmInterval;

btnStartClock.addEventListener("click", () => {
  clockInterval = setInterval(() => {
    const date = new Date();
    // console.log(date.toLocaleDateString());
    showTime.innerHTML = date.toLocaleTimeString();
  }, 1000);

  btnStartClock.disabled = true;
});

btnStopClock.addEventListener("click", () => {
  clearInterval(clockInterval);
  showTime.innerHTML = "";
  btnStartClock.disabled = false;
});

btnStartAlarm.addEventListener("click", () => {
  let beepAudio = new Audio(
    "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"
  );
  alarmInterval = setInterval(() => {
    beepAudio.play();
  }, 1000);
  btnStartAlarm.disabled = true;
});

btnStopAlarm.addEventListener("click", () => {
  clearInterval(alarmInterval);
  btnStartAlarm.disabled = false;
});
