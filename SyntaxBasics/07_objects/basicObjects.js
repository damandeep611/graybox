//? create a object and log the value
const movieInfo = {
  movieName: "Maharaja",
  actor: "Vijay Sethupati",
  rating: 5,
  director: "Nithilian",

  updateRating(newRating) {
    if (0 >= newRating <= 5) {
      this.rating = newRating;
    } else {
      console.log(
        `Invalid rating number please choose the Rating between 0.5 and 5`
      );
    }
  },
};
// console.log(movieInfo);
console.log(
  `The movie name is: ${movieInfo.movieName}. and the actor is ${movieInfo.actor}`
);

// ? updating the rating in the object
movieInfo.updateRating(4.5);
// console.log(movieInfo);

// ? Nested Objects
// create a nested object with a library with properties like books and name i.e an array of object

const library = {
  peter: {
    firstName: "peter Thiel",
    books: "zero to One",
    netWorth: 50,
    occupation: "businessMan",
  },
  Elon: {
    firstName: "elon musk",
    books: "biography of elon musk",
    networth: 80,
    occupation: "Engineer and Autist",
  },
};

console.log(library);
//access and log the names of the library and the name of all the people in the library
console.log(
  `The name of both the famous founders of paypal is ${library.peter.firstName} and ${library.Elon.firstName}`
);

//? use of This keyword =
