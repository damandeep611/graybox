// ? use ARRAY destructuring to extract the first and second elements from an array of numbers
let a, b, rest;
[a, b, ...rest] = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// console.log(a);
// console.log(b);
// console.log(rest); // the ...rest if the use of rest operator and we use it by placing ... three dots infront

// ? use OBJECT  destructuring to extract title and author form a book object
const book = {
  title: "zero to one",
  author: "peter thiel",
  about: "business ",
};

const { title, author } = book;
console.log(`Book name is ${title} and author of the book is ${author}`);
