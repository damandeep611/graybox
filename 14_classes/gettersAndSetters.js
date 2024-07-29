// ? Getters and Setters in Classses
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName} ${this.age}`;
  }
  //  setter method to update the name properties of Person Class
  set fullName(name) {
    const [firstName, lastName, age] = name.split("");
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const personInfo = new Person("David", "sinclair", 35);
console.log(personInfo.fullName);
