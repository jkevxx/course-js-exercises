const d = document;

export function shortcut(e) {
  console.log(`Type: ${e.type}`);
  console.log(`key: ${e.key}`);
  console.log(`keyCode: ${e.keyCode}`);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);
  console.log(e);

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
