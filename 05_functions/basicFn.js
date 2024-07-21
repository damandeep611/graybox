// * Functions using ----- Functino Declration ---
// ?function to check if a number is odd or even
function oddEven(num) {
  return num % 2 == 0 ? "Number is even" : "Number is odd";
}
// console.log(oddEven(27));

// ? Function to Declare the square of a number
function square(num) {
  return num * num;
}
// console.log(square(5));

//* function using --Function Expression--

const findMax = function (a, b) {
  return a > b ? a : b;
};

// console.log(findMax(33, 221));

// ?concate two string using a function expression
const addString = (str1, str2) => {
  return str1 + str2;
};

console.log(addString("hello", "world"));
