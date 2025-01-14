// spread operator -> ... allows an interable such as an array or string to be expanded into separate elements (i.e it unpacks the element)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.min(...numbers);
console.log(maximum);

// now separating a string with different characters
let username = "devDaman";

let usernameLetters = [...username].join("-");
console.log(usernameLetters);
