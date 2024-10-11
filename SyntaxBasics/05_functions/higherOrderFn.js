// ?Higher Order Functions concept

function callbackFuncion() {
  console.log("I am a Callback Function");
}
function higherOrderFunction(func) {
  console.log("i am a higer order function");
  func();
}
// higherOrderFunction(callbackFuncion);

// fn that calculates area and diameter of a circle
const radius = [4, 2, 3];
const calculateArea = (radius) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
const calculateDia = (dia) => {
  let diaOutput = [];
  for (let j = 0; j < dia.length; j++) {
    diaOutput.push(2 * dia[j]);
  }
  return diaOutput;
};
// console.log(calculateArea(radius));
// console.log(calculateDia(radius));

// ? So  here we wanted to calculate area and cicle using radius , and we had to write repetitive code due to this but there was only a minor change in the logic but we still had to write it, But Higher Order function Changes this, if we have a common varialbe and we want to apply different logic or algoritm to that variable or data we can use higher order function and will not have to write the funciton again and again with different logic so here it is
//  for area of cirlce
const areaCircle = (radius) => {
  return Math.PI * radius * radius;
};
//  for diameter of circle
const areaDia = (radius) => {
  return 2 * radius;
};

//  now we will make a higher order funciont that also takes functions as arguements
const calculate = (radius, logic) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

// console.log(calculate(radius, areaDia));
// console.log(calculate(radius, areaCircle));

// ******************
// ? higher order function that takes a function and a number and calls the function that many times
const checkLogic = () => {
  console.log("this is a test");
};
const callNumber = (logic, num) => {
  for (let i = 0; i < num; i++) {
    logic();
  }
};
// console.log(callNumber(checkLogic, 3));

// ? higher order function that takes two functions and a value, applies the first function to the vaue and then applies the second function to the result
const addFn = (plus) => {
  return plus + 11;
};

const subFn = (sub) => {
  return sub - 10;
};

const threeCallBacks = (logic1, logic2, value) => {
  let first = logic1(value);
  let final = logic2(first);
  return final;
};

console.log(threeCallBacks(addFn, subFn, 7));
