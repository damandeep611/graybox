// ?print a pattern of * of 5 lines and there has to be 5 stars at the end as it increases gradually  form 1 to 5 stars
for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
