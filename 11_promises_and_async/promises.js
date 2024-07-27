// *Understanding promises
//? create a promise that resovles with a message after 2 second timeout and log to console
function delayedMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello from the console after 2 second delay");
    }, 2000);
  });
}

// delayedMessage()
//   .then((message) => {
//     console.log("the promise is fulfilled after 2 seconds");
//   })
//   .catch((error) => {
//     console.log("the error occured");
//   });

// ? using math.random to demo a promise in action

function mathPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mathNumberCheck = Math.random() > 0.5;
      if (mathNumberCheck) {
        resolve(`The Math number is bigger than 0.5 : ${mathNumberCheck}`);
      }
      reject(new Error(`The math number is lower which is ${mathNumberCheck}`));
    }, 2000);
  });
}
// mathPromise()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const myPromise = new Promise((resolve)=> {
  setTimeout(()=> {
    resolve("Promise practice")
  }, 1500)
})

myPromise.then((message)=> {
  console.log(message);
})

// create a promise that either resolves with success or rejects with error 
const twoPromises = new Promise((resolve, reject)=> {
  setTimeout(()=> {
    const two = "the"
    if(two == "three"){
      resolve("promises is good")
    }else {
      reject("bad Promise")
    }
  }, 1500)
})
twoPromises.then((message)=> {
  console.log(message);
})
.catch((error)=> {
  console.log(error);
})
