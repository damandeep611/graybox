// filter function to filter elements from a array

// filtering arrays with in build filter function
const numbers = [1, 2, 3, 4, 12, 14, 56, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(evenNumbers, oddNumbers);

const Testnumbers = [1, 2, 3, 4, 11, 14, 56, 5, 6, 7, 8, 9];
const numberStartingWith1 = [];

Testnumbers.forEach((one) => {
  if (one % 10 == 1) {
    numberStartingWith1.push(one);
  }
});
console.log(numberStartingWith1);

// filtering array with forEach and a new array
const fruits = ["apple", "banana", "peach", "orange", "avacado", "grape"];
const fruitsStartingWithA = [];
fruits.forEach((fruit) => {
  if (fruit.startsWith("a")) {
    fruitsStartingWithA.push(fruit);
  }
});
console.log(fruitsStartingWithA);
