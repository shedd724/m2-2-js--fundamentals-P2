// Exercise 19
//
// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use 'for' loops to implement your logic
//
// Write a function that takes an array and a function as parameters and returns
// a new array with all elements that pass the test implemented by the provided function.
//
// - filter(arr, func) returns an array with only the elements of arr that satisfy func.
//
// Example
// filter([1, 2, 3, 4, 5], function(x) { return x % 2 === 0;}) returns [2,4];
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function filter(arr, func) {
  // arr is an array and f is a function
  // func takes one argument and returns a boolean (true or false)
  let ans = [];
  for(let idx = 0; idx <= arr.length - 1; idx++){
    if(func(arr[idx])){
      ans.push(arr[idx])
    }
  }
  return ans

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(
  filter(["Batman", "Superman", "Moe", "Flash"], function (x) {
    return x.length > 5;
  })
);

// This is needed for automated testing (more on that later)
module.exports = filter;
