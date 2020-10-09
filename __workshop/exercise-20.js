// Exercise 20
//
// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use 'for' loops to implement your logic
//
// Write a function that tests whether all elements in the array
// pass the test implemented by the provided function. It returns a Boolean value.
//
// Example:
// function isEven(num) { return num % 2 === 0 }
// every([2,4,12], isEven) returns true
// every([2,3,12], isEven) returns false
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function every(arr, func) {
  // arr is an array and f is a function
  // func takes 1 argument and returns a boolean
  let ans = [];
  for(let idx = 0; idx <= arr.length - 1; idx++){
    if(func(arr[idx])){
      ans.push(arr[idx])
    }
  }
  return ans.length === arr.length
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

function isEven(num) {
  return num % 2 === 0;
}
console.log(every([2, 42, 540, 8, 64], isEven));
console.log(every([2, 42, 540, 3, 64], isEven));

// This is needed for automated testing (more on that later)
module.exports = every;
