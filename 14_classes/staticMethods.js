class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static greetGeneric() {
    console.log("Generic greeting from Person class.");
  }

  // ... other methods
}

class Student extends Person {
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
  }

  // ... other methods
}

Person.greetGeneric(); // Output: Generic greeting from Person class.
const student2 = new Student("Charlie", 22, "S67890");
const student3 = new Student("Alex", 22, "HTU4567");
console.log(Student.studentCount); // Output: 1
