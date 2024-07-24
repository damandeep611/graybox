// ?write an async function that waits for promise to be resolved and then logs the resolve value
async function waitForIt() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved`);
    }, 2000);
  });
  try {
    const resolvePromise = await myPromise;
    console.log(resolvePromise);
  } catch (error) {
    console.error("Error:", error);
  }
}
waitForIt();
// ?write an async function that handles a rejected promise using try - catch and logs the error message
async function waitForfail() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`unsuccessful resolve`);
    }, 2000);
  });
  try {
    const resolvePromise = await myPromise;
    console.log(resolvePromise);
  } catch (error) {
    console.error("Error occured:", error);
  }
}
waitForfail();
