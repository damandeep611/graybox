// ? Comparison Operator
// program to compare two number using > and < and log the result
let omni = 400;
let invincible = 24;
const checkAge = omni < invincible;
const checkAgeTwo = omni > invincible;
console.log(
  ` is Omni age less than invicible: ${checkAge}. Well the Omni age is greater than invincible: ${checkAgeTwo}`
);
// program to compare two number using >= and <= and log the result
let supermanPower = 25;
let batPower = 24;
const checkPower = supermanPower <= batPower;
const checkPowerTwo = supermanPower >= batPower;
console.log(
  ` is superman less than batman: ${checkPower}. Well the auper is greater than bat: ${checkPowerTwo}`
);

// program to compare two number using == and ===
let appleStock = 500;
let microStock = "500";
const checkValue = appleStock == microStock;
const checkValueAndDataType = appleStock === microStock;
console.log(
  `does the both variable has same type of value: ${checkValue}, and does they have same Data type : ${checkValueAndDataType}`
);
