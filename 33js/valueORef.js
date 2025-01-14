let obj = { name: "ava" };
let objnew = { ...obj }; //creates a shallow copy
objnew.name = "helen"; // so here the modification does not change the original val

console.log(obj); // ava
console.log(objnew); // helen
