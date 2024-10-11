// ?print numbers from 1 to 10 but skip the number 5 using continue statement

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
//?print numbers from 1 to 10 but stop at 5 using break statement
for (let j = 0; j <= 10; j++) {
  if (j === 5) {
    break;
  }
  console.log(j);
}
