export default function scrollTopButton(btn) {
  const scrollBtn = document.querySelector(btn);

  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 600) {
      scrollBtn.classList.remove("hidden-btn");
    } else {
      scrollBtn.classList.add("hidden-btn");
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
