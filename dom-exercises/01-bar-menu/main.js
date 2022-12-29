const icon = document.getElementById("menu-icon");
const menu = document.querySelector(".menu");
const optionsMenu = document.querySelectorAll(".menu__options");

icon.addEventListener("click", () => {
  menu.classList.toggle("handle");
  icon.classList.toggle("toggle");
  // console.log(icon);
});

optionsMenu.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.toggle("handle");
    icon.classList.toggle("toggle");
  });
});
