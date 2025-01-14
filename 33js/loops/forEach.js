const names = ["Alice", "Bob", "Charlie"];
// printing the array items using for loop
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// printing the array items using the forEach loop
// forEach is more cleaner and efficient
console.log("This is forEach method: with inline call back function ");

// using a inline call back function
names.forEach(function (element, index) {
  console.log(`The number ${index} name is ${element}`);
});

// using a named function as call back
function namedElement(element) {
  console.log(element);
}
//
console.log("this is named element call back function");

names.forEach(namedElement);

// Note: Whether you choose to define the callback function inline or as a named function depends on the complexity and reusability of the operations you need to perform on each element. Both approaches are valid and provide flexibility in how you work with the forEach method.
