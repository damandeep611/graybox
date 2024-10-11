// ? Spread and Rest Operator
// use the spread operator to create a new array that includes all elements of an existing array plus additonal elements and log the result
const existingArray = [12, 13, 14, 15, 16, 17, 18, 19];
const arr = ["hero", "avernger", "shutter Island", "Heat"];
const newSpread = [...existingArray, ...arr];
// console.log(newSpread);

//use the rest operator in a function to accept an arbitrary number of arugments and sum them and log the result
function restAddition(...add) {
  let sum = 0;
  for (let i of add) {
    sum += i;
  }
  return sum;
}
console.log(restAddition(1, 2, 3, 4, 5, 6, 7));

// ? Default Parameter
//write a function that takes two parameter and returns their product. with the 2nd parameter having default value of 1 and log the result of calling this functin with and without the 2nd parameter

function twoPara(a, b = 1) {
  return a + b;
}
console.log(twoPara(4));
console.log(twoPara(2, 8));
