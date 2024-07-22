// ?use for ...in loop to iterate over the properties of book object and log each property and its value

const book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  yearPublished: 1979,
};

function logBook(objBook) {
  for (const objProperty in objBook) {
    console.log(objProperty + ":" + objBook[objProperty]);
  }
}
logBook(book);

// ? use object.keys and object.values to log all the keys and values of the book object
const objKeys = Object.keys(book);
console.log(objKeys);
const objValues = Object.values(book);
console.log(objValues);
