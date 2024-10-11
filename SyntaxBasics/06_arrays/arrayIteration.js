//? use a loop to iterate over an array and log the result
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  // console.log(1 + arr[i]);
}

// ? use foreach to iterate over the array and log the result
const forArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
forArr.forEach((item) => {
  console.log(item + 2);
});
//  we can also wrap this whole varibale , for each and log into a big function also if the code file is too big or to organize the code
