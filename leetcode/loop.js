var map = function (arr, fn) {
  const transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr[i] = fn(arr[i], i);
  }
  return transformedArr;
};

function plusone(n) {
  return n + 1;
}

let arrFn = [1, 2, 3, 4, 5, 6, 7];
const mapping = map(arrFn, plusone);
console.log(mapping);
