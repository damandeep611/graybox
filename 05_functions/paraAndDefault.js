// ? Parameter and default values
//function that takes two parameters and returns their product and one parameter should have a default value
const twoPara = (str, dValue = 12) => {
  return str * dValue;
};

console.log(twoPara(10));

// ? fn that takes person's age and name and and returns a greeting message and the age should have default value
const greeting = (naam, age = 20) => {
  return `hello ${naam} your Age is ${age}`;
};
console.log(greeting("mukesh"));
