// ? array methods i.e Map(), filter(), Reduce()

// use map method to double the numbers in an array
const useMethods = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mapMethod = useMethods.map((num) => num * 2);
console.log(mapMethod);
// use filter method to make new array with only even values and log the resutl
const filterMethod = useMethods.filter((num) => num % 2 === 0);
console.log(filterMethod);
// use reduce method to calculat thhe sum of all the number in array
const reduceMethod = useMethods.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);
console.log(reduceMethod);
