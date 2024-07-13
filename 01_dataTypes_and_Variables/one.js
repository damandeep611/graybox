//Activity one
// ?1- declare a variable using var and assign it a number and log the value to the console

var numberOne = 24;
console.log(numberOne);

//? 2- declare a variable using let and assign a string and log the value to the console
let oneString = "JavaScript 30 Challenge";
console.log(oneString);

// ? 3- declare a variable using const and assign it a boolean value and log the value to the console
const testBoolean = true;
console.log(testBoolean);

// ? 4- create variables of different data types(number, string, boolean, array, object ) and log  each variable's type using typeOf operator

const typeNumber = 54323;
const typeString = "Variable testing here bud";
const typeBoolean = true;
const typeArray = ["Invincible", "Attack on Titans", "K2", "Everest", 33, 56];
const typeObject = {
  name: "Omni-Man",
  Power: "Indestructable and SuperMan",
  planet: "Viltrum",
  age: 999,
};
console.log(`typeNumber is a ${typeof typeNumber}`);
console.log(typeof typeString);
console.log(typeof typeBoolean);
console.log(typeof typeArray);
console.log(typeof typeObject);

// ? 5- Declare a variable usign let and reassign a new value to it and log both the values to the console
let assignOne = "Attack on titans is the best Anime Ever";

console.log(assignOne);

assignOne = "No, i think DeathNote is the best anime ever Made";
console.log(assignOne);
// when we have to reassign a value to the already declread variable then we don't declare it again (we don't use let = assingOne again to reassign the already declared variable a new value but we direclty call the variable and declare the new value that we want to assign it to )

// ? 6 - Try to reassign a variable declared with const and check the error

const checkConst = 11;
console.log(checkConst);
checkConst = 111;
// if we try to assign a new variable to const variable we will get a "Assignment to constant Variable" error, this kind of happens when we try to reassign value to immutable types meanning thir values can't be altered once we declare them
