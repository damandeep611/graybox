// ? array demo basic
// log the array of no. 1- 5 to console
const five = [1, 2, 3, 4, 5];
console.log(five);
// access the first and last element of array and log them to the console
const hero = ["bat", "supe", "flash", "maeve"];
console.log(hero[0], hero[hero.length - 1]);
// the hero.length - 1 is there to access the last value of the array

// ? Basic array methods - [push, pop, shift, unshift]
const movies = ["MI5", "Arrival", "Forgotten", "Fight Club"];
//push method to push a new number to the end of array
movies.push("DareDevil");
// pop to remove last array item  from list - pop removes last element of the array
movies.pop();
//  shift removes first element from the array
movies.shift();
// unshift adds new array items to the start of the array
movies.unshift("Mission Impossible", "Top gun");
console.log(movies);
