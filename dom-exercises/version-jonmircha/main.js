import hamburgerMenu from "./01Hamburger_menu.js";
import { digitalClock, alarm } from "./02ClockAlarm.js";
import { shortcut } from "./03Keyboard.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#startClock", "#stopClock");
  alarm("assets/pikachu.mp3", "#startAlarm", "#stopAlarm");
});

d.addEventListener("keydown", (e) => {
  shortcut(e);
});
