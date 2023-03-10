export default function responsiveTester(form) {
  const $form = document.getElementById(form);
  let tester;

  document.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      console.log("hi");

      tester = window.open(
        $form.direction.value,
        "tester",
        `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`
      );
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === $form.close) tester.close();
  });
}
