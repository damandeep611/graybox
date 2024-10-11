# why typeOf was showing the type as object rather than array when we clearly defined the variable as an array 

 Limited Type Information: JavaScript is a dynamically typed language. This means the data type of a variable is associated with its value at runtime, not when it's declared. typeof simply checks the current value and returns a broad category like "object" or "number." It doesn't have access to more specific details like whether the object is an array or a regular object.

 Arrays as a Special Kind of Object: In JavaScript, arrays are technically a type of object. They inherit properties and methods from the general object type. However, they also have additional methods specifically designed for working with collections of elements. So, while team is an array, it's still considered an object in the broader sense by typeof.

#  Var and let and Const and hoisting and block scope and their connection 
While let and const have block scope (meaning they are accessible within the block they are declared in), there's a historical concept in JavaScript called hoisting that can affect how these variables appear to behave before their declaration.

Here's the breakdown:

var (hoisted): In older JavaScript code, variables declared with var are hoisted to the top of their scope (like a function or the global scope). This means you could access and even assign a value to a var variable before its actual declaration in the code. However, this behavior can lead to unexpected results and is generally discouraged in modern JavaScript.
let and const (not hoisted, but have a temporal dead zone): These keywords were introduced to address the issues with var hoisting. They are not hoisted in the same way. Instead, they have a concept called a temporal dead zone (TDZ). This means the variable exists in the current scope, but you cannot access it or assign a value to it before its declaration. Trying to do so will result in a ReferenceError.
However, it's important to note that:

In modern JavaScript development, it's recommended to treat let and const as if they are not hoisted at all. This simplifies reasoning about your code and avoids potential pitfalls.
The concept of hoisting is more relevant when dealing with older code or understanding the historical reasons for the introduction of let and const.
So, while there's a technical connection between hoisting and let vs. const, it's often best to focus on their core difference: mutability. Use let for variables that can change and const for fixed values to write clear and predictable code.