import hamburgerMenu from "./01Hamburger_menu.js";
import { digitalClock, alarm } from "./02ClockAlarm.js";
import { moveBall, shortcut } from "./03Keyboard.js";
import { countdown } from "./04Countdown.js";
import scrollTopButton from "./05ButtonScroll.js";
import darkTheme from "./06darkTheme.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#startClock", "#stopClock");
  alarm("assets/pikachu.mp3", "#startAlarm", "#stopAlarm");
  countdown("countdown", "May 23, 2023 03:23:00", "Happy Birthday");
  scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  shortcut(e);
  moveBall(e, ".ball", ".stage");
  // console.log("hi");
});

darkTheme(".dark-theme-btn", "dark-mode");
