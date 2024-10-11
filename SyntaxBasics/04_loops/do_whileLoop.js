//? print numbers from 1 to 5 using do while loop
let b = 0;
do {
  b += 1;
  // console.log(b);
} while (b < 5);
// ? calculate factorial of a number using do while loop
let a = 0;
do {
  a += 2;
  // console.log(a);
} while (a < 20);

// ? table of any number using do while loop inside a function
function table(num) {
  let i = 0;
  do {
    i += num;
    console.log(i);
  } while (i < num * 10);
}
console.log(table(7));
