// ?Program to find the largest of three numbers using nested if else statements

const one = 100;
const two = 45;
const three = 25;

if (one > two) {
  console.log("one is bigger");
} else {
  if (two > three) {
    console.log("two is bigger");
  } else {
    console.log("three is bigger");
  }
}
//* so this code uses nested if else statement to check which of the three number is the greatest  but it's not the most efficient method so we will look at another way to solve it, and if there is more than three numbers then the code will look like mess so =

let largest = Math.max(1, 2, 22, 45, 0, 120);
let biggest = Math.max(one, two, three);
console.log(largest);
console.log(biggest);
