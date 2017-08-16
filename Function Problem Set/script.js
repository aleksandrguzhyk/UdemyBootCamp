// isEven function
function isEven(num) {
  return num % 2 === 0;
}

// factorial function
function factorial(num) {
  var result = 1;
  for (var i = 0; i <= num; i++) {
    result *= i;
  }
  return result;
}

// kebabToSnake function
function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
