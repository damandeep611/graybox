// * Multidimensional Arrays Concept
// we define the Multidimensional array as same as defining the normal array, so first to make multidimensional array we will need to make normal arrays
//  ? create a two dimensional array(Matrix) and log the value to the console
let arr = ["aperosn", 24, 13000];
let arr1 = ["bperson", 25, 14000];
let arr2 = ["cperson", 26, 15000];
let arr3 = ["dperson", 27, 16000];
let salary = [arr, arr1, arr2, arr3];
console.log(salary);

// ? access and log a specific element from the two dimensional arary
let salaryHigh = salary[3];
console.log(`Salary highest is : ${salaryHigh}`);
