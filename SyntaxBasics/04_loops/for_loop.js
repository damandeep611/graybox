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

//array reversal 
let newArr = [1,2,3,4,5,6,7,8,9,10];
function reverseArray(arr){
  let reverseArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reverseArr.push(arr[i]);
  }
  return reverseArr
}
// console.log(reverseArray(newArr))

// print a start pattern going from 1 star to 5 in vertical stacks 
for(let i = 0; i <= 5; i++){
  let pattern = "";
  for(let j = 0; j <= i; j++){
    pattern += "*"
  }
  console.log(pattern); 
}