// ? arrow fn to return sum of two numbers
const addTwo = (a, b) => a + b;
console.log(addTwo(9, 11));

// ? arrow fn to check if a string contains a specific vaule and then returns a boolean

// ?there are many method to do it but we will be using two method to check if a string contains a specific value
// we will use inbuild method like .includes()
const checkLetter = (str, letter) => str.includes(letter);

console.log(checkLetter("hello", "o"));

// without using include method
const checkLetterTwo = (strOne, letterOne) => {
  for (let i = 0; i < strOne.length; i++) {
    if (strOne[i] === letterOne) {
      return "tis works";
    } else {
      false;
    }
  }
};

console.log(checkLetterTwo("martian", "r"));
