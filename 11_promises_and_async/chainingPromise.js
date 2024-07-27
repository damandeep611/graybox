// ? create a sequence of promises that simulate fetching data from a server, chain the promises to log messages in specific order

// ? chaining promises

const number = new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 1500);
});
number
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 1000);
    });
  })
  .then((finalResult) => {
    console.log(finalResult);
    return finalResult * 3;
  })
  .then((final) => {
    console.log(final);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (final == 20) {
          resolve("the answer is twenty");
        } else {
          reject("the answer if not 20 bro");
        }
      }, 500);
    });
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
