function getName(name) {
  return name.length;
}

try {
  const ans = getName(8);
  console.log(ans);
  console.log("check try");
} catch (e) {
  console.log("inside catch");
}
console.log("try catch method");
