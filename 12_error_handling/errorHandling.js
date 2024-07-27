// ? Error handling in Promises

async function promiseCheck() {
  let randomNumber = Math.random() * 10;
  const randomPromise = new Promise((resolve, reject) => {
    if (randomNumber < 2) {
      resolve("the number is less than 2");
    }
    reject("Error due to number not being less than 2");
  });
  try {
    const result = await randomPromise;
    console.log(result);
  } catch (error) {
    console.error("an Error has occured:", error);
  }
}
promiseCheck();
