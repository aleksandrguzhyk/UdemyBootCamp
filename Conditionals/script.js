// Get age and convert it to a Number (promp always return a String)
var age = Number(prompt("What is you age?"));

// Ig age is negative
if(age < 0) {
  console.log("Come back once you're out of the womb. :)");
}

// if age is 21
if(age === 21) {
  console.log("Happy 21st Birthday!");
}

// if age is odd (not evenly divisible by two)
if(age % 2 !== 0) {
  console.log("Your age is odd!");
}

//if age is perfect square
if(age % Math.sqrt(age)){
  console.log("Your age is a perfect square!");
}
