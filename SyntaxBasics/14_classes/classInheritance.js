class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// ? if you want to extend a class, i.e you want to add some more property to it then you can use the "extend" functinality, but you have to write the class first and then extend that class by adding additional things to it

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
  greetingMessage() {
    console.log(
      `hello ${this.name}, your age is ${this.age} and my student id is ${this.studentId}`
    );
  }
}
const personData = new Student("jenny", 26, "THK2131");
console.log(personData.getStudentId());
personData.greetingMessage();
