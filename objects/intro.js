const person = {
  name: "mia",
  lastName: "wallace",
  printFullName() {
    return `${this.name.toUpperCase()} ${this.lastName}`;
  },
  dateOfBirth: "18th October",
  friends: ["mia", "priaya", "ava"],
  girlfriends: {
    ex: "mia",
    current: "alisha",
    number: 8,
  },
};
person.girlfriends.current = "kriti";
// property names i.e name, lastName, dateOfBirth are treated as strings so "lastName" and lastName are same

person["dateOfBirth"] = 17; //bracket notation to change the object property value
// console.log(person);
// console.log(person.printFullName());
// console.log("friends" in person);

// applying loop on object
for (const property in person) {
  const value = person[property];
  console.log(property, value);
}
