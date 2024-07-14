// ? Logical Operators
// program that uses the && operator to combine two conditions and log the result
const a = 20;
const b = -3;
console.log(a < 10 && b < 1);
// ?here the AND (&&) operator only gives true boolean value when both the variables meets the true evalution and returns false even when even one of the variable doesn't meet the evaluation criteria i.e is truthy value  -- it is used in authentication methods or where you need the user to meet all requirement to login or register to you website

//program that uses the || operator to combine two conditiosn and log the result

const c = true;
const d = false;
console.log(c || d);
// ? the OR (||) operator returns Truthy value even if only one or more values are true

// program that  uses the ! operator to negate a condition and log the result

const e = true;
const f = false;
console.log(!e || f);
// ? previoulsy we used this to check if only one value was correct but in Logical NOT operator (!) we can convert a value to falsy by just putting the ! sign in front, here we only put the ! sign infront of e variable and it turned into falsey.
