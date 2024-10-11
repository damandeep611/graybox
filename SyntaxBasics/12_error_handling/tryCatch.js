// ? use try catch to handle error and log the error value

async function testTryError() {
  const two = 30;
  const tryError = new Promise((resolve, reject) => {
    if (two == 20) {
      resolve("the value is good");
    } else {
      reject("Error Occured");
    }
  });
  try {
    const result = await tryError;
    console.log(result);
  } catch (error) {
    console.error("Error occured Buddy:", error);
  }
}
// testTryError();

// ?create a function that divides two numbers and throws an error if denominator is zero ,use try catch to handle this error
function divisionNumber(a, b) {
  try {
    if (b === 0) {
      throw new Error("Denominator should not be zero");
    }
    const divisionResult = a / b;
    console.log(`The result of ${a} into ${b} is ${divisionResult}`);
  } catch (error) {
    console.error("An Error has Occured:", error);
  }
}
// divisionNumber(25, 0);

// ? try catch and finally methods
function addNumbers(a, b) {
  // let success  = false to only execute finally statement if the operation is succesful
  let success = false;
  try {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Please Enter a Valid Number");
    }
    const additionResult = a + b;
    console.log(`The additon result is ${additionResult}`);
    success = true;
  } catch (error) {
    console.error("Error Occured:", error);
  } finally {
    // added if condition that if the operation is successful only then finally log the value
    if (success) {
      console.log(`The addtion Operation is completed`);
    }
  }
}
addNumbers(25, 7);

// ?============== try catch wit custom error objects

class InputValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InputValidationError";
  }
}

function validateInput(value) {
  if (isNaN(value)) {
    throw new InputValidationError("Please Enter a Valid Number");
  }
}

function multiplyNumbers(a, b) {
  let success = false;
  try {
    validateInput(a);
    validateInput(b);
    const multiplyResult = a * b;
    console.log("the multiplication Result is:", multiplyResult);
    success = true;
  } catch (error) {
    console.error("Error Occured", error);
  } finally {
    if (success) {
      console.log("multipliction Process completed");
    }
  }
}
multiplyNumbers(5, "a");
