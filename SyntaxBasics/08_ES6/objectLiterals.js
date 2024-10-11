// ? Enhanced Object Literals - ojbect can be made from already declared variables and
// use enhanced object literals to create an object with methods and properties and log the resutl
// ? creating object from variables
const fName = "Mark";
const lName = "Anthony";
const age = 100;
const info = { fName, lName, age };
// console.log(info);

// ? object methods can also be made with object literal enhancement
const profession = () => {
  return console.log("Eat this Bullet Mffff..!!!!");
};
const markIntro = { fName, lName, age, profession };
const message = markIntro.profession();
console.log(message);

//? create an object with computed property names based on variables and log the result
const firstName = "John";
const lastName = "Doe";
const ageNew = 30;
// Use square brackets with variables to create computed property names
const person = {
  [`fullName`]: `${firstName} ${lastName}`, // Template literal for full name
  [ageNew]: "This person's age", // Use age variable as property name
};

console.log(person);
