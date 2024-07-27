// ? use of promise.all and promise.race
const promise1 = Promise.resolve(3);
const promise2 = 32;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, `foo`);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// ? promise.ract

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, `two`);
});
const twoPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 50, `three`);
});
Promise.race([firstPromise, twoPromise]).then((value) => {
  console.log(value);
});
