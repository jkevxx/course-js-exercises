function sayHi(callback) {
  let name = "kevin";
  callback(name);
}

function message(name) {
  console.log("Hi " + name);
}

// sayHi(message);

const elements = ["Yamada", "Shiraishi", "Kaguya", "Miyuki"];

function present(name) {
  console.log("Hi " + name);
}

elements.forEach((e) => present(e));

// Callback Async

// function movie(url, callback) {
//   console.log("downloading..." + url);
//   setTimeout(() => {
//     console.log("downloaded!");
//     callback(url);
//   }, 3000);
// }

// function process(file) {
//   console.log("processing..." + file);
// }

// movie("spider man", process);
