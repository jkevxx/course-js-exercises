class Person {
  #name;
  constructor(name, lastName) {
    this.#name = name;
    this.lastName = lastName;
  }

  get getName() {
    return this.#name;
  }

  set setName(name) {
    this.#name = name;
  }

  nameCompleted() {
    return `${this.#name} ${this.lastName}`;
  }
}

const people = new Person("Kevin", "Paez");

console.log(people.getName);
people.lastName = "Otro";
people.setName = "Luis";

console.log(people.nameCompleted());
