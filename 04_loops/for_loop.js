// ? program to print numbers from 1 to 10 using For loop

for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

// for loop to calculate sum of numbers from 1 to 10
let sumOfH = 0;
for (let i = 0; i <= 10; i++) {
  sumOfH += i;
  // console.log(sumOfH);
}

//for loop to calculate the factorial of given number

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//reverse a string
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("martian"));