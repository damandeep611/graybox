// ? Variables type - Write a script that declares variables of diff data types and logs the value and type of each variable to the console
let heroName = "Invicible";
let age = 200;
let strong = true;
let ancestory = 1.5;
let team = ["aliens", "viltrumites", "extras", 22, 34];
let completeInfo = {
  mainName: "mark",
  realAge: 25,
  typeIs: "anime",
};
let checkArray = [22, 34, 34, 34];

console.log(`Name: ${heroName} - and it's type is ${typeof heroName}`);
console.log(`Age: ${age} - and it's type is ${typeof age}`);
console.log(`Strong ?: ${strong} - and it's type is ${typeof strong}`);
console.log(`Ancestory: ${ancestory} - and it's type is ${typeof ancestory}`);
console.log(`team: ${team} - and it's type is ${typeof team}`);
console.log(
  `realIfno: ${completeInfo} - and it's type is ${typeof completeInfo}`
);
console.log(typeof checkArray);

// ? why the typeOf operator is showing {team and checkArray} variable as a object rather than array ?
// *check featureReadme file
// ?to check whether the variable is array or not you can also use this method of --- Array.isArray(variable)

const testCheck = Array.isArray(team);
console.log(testCheck);
//  or the following method also
const testArray = team instanceof Array;
console.log(testArray);
