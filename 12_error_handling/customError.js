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
