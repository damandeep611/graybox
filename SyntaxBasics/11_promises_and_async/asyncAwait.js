// ?write an async function that waits for promise to be resolved and then logs the resolve value


async function myasyncPromise() {
  const two = 3;
  const asyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (two == 2) {
        resolve("checking async function work");
      } else {
        reject("an error has occured so reload buddy");
      }
    }, 1000);
  });

  try {
    const result = await asyncPromise;
    console.log(result);
  } catch (error) {
    console.error("error fetching heheh data:", error);
  }
}
myasyncPromise();

