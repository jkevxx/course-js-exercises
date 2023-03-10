import hamburgerMenu from "./01Hamburger_menu.js";
import { digitalClock, alarm } from "./02ClockAlarm.js";
import { moveBall, shortcut } from "./03Keyboard.js";
import { countdown } from "./04Countdown.js";
import scrollTopButton from "./05ButtonScroll.js";
import darkTheme from "./06darkTheme.js";
import responsiveMedia from "./07responsiveObject.js";
import responsiveTester from "./08ResponsiveTester.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#startClock", "#stopClock");
  alarm("assets/pikachu.mp3", "#startAlarm", "#stopAlarm");
  countdown("countdown", "May 23, 2023 03:23:00", "Happy Birthday");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/a6Fl1Xl1ogg" target="_blank" rel="Attack on Titan" > Watch Video </a>`,
    `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/a6Fl1Xl1ogg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
  );
  responsiveMedia(
    "google-maps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/hHhtaRfdAV7RvPXr9" target="_blank" rel="Attack on Titan" > See Map </a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12656.400554788663!2d-99.15363311327538!3d19.43070055334338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b75aa014d%3A0x17d810d20da6e8cf!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1sen!2smx!4v1678121686187!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester("responsive-tester");
});

d.addEventListener("keydown", (e) => {
  shortcut(e);
  moveBall(e, ".ball", ".stage");
  // console.log("hi");
});

darkTheme(".dark-theme-btn", "dark-mode");
