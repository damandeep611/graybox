const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// calculate the sum of the numbers using reduce

const sum = numbers.reduce((accumulate, currentValue) => {
  return accumulate + currentValue;
}, 0);
console.log(sum);

// so how the reduce function worked ? as we got the sum of the number ?
// the accumulate is the initial value that was loaded i. e here the initial value is 0 instead of 1 so the initial value of 0 was assigned to accumulate and then the subsequent valules were kept on being added (i.e starting from 1 and ending at 9,)  to the accumulalte as after the initial value of 0 was assigned to accumulate "1" number was assigned to current value and added to accumulate , and this process was followed until the end of the array

//?technical correct explanation
// The initial value (0) is assigned to accumulate before the iteration starts. Then, for each element of the array, the currentValue is added to accumulate, and the result becomes the new value of accumulate. This process repeats for all elements in the array until the final result is produced.

// If no initial value is provided, the first element of the array is used as the initial value for accumulate, and the iteration starts from the second element.
