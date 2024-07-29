class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  grettingMessage() {
    console.log(`Hello ${this.name}, your age is ${this.age}`);
  }
  updateAge(newage) {
    this.age = newage;
    console.log(`Age updated to ${this.age}`);
  }
}
const personOne = new person("Alex", 21);
personOne.grettingMessage();
personOne.updateAge(23);
personOne.grettingMessage();
