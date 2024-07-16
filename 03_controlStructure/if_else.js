// ?program to check if a number is positive, negative or zero and log the result
function checkNumber(number) {
  if (isNaN(number)) {
    console.log("please enter a valid number");
    return;
  }

  if (number > 0) {
    console.log("Positive");
  } else if (number < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
  return;
}
const one = 11;
const two = -12;
const three = 0;
// console.log(checkNumber(one));
// console.log(checkNumber(two));
// console.log(checkNumber(three));

// ?program to check if the person is eligible to vote (age >= 18)
function checkAge(age) {
  let voterCheck;
  if (isNaN(age)) {
    console.log("Please Enter Valid Number");
  } else if (age >= 18) {
    console.log("The voter is Eligible");
  } else if (age < 18) {
    console.log("The voter is underage");
  } else {
    console.log("Nic");
  }
  return voterCheck;
}

// let voterCheck = checkAge(12);
// console.log(voterCheck);
// const voterCheckOne = checkAge(19);
// console.log(voterCheck);
// const voterCheckTwo = checkAge("hola");
// console.log(voterCheckTwo);

// ?program to check if a year is leap year using multiple conditions(divisible by 4 but not 100 unless also divisible by 400) and log to console

const thisYear = 400;
if (thisYear % 4 == 0) {
  console.log("this is a leap year");
} else {
  console.log("Not a Leap Year");
}
