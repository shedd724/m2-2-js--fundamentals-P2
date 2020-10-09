// Exercise 18
//
// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use 'for' loops to implement your logic
//
// Write a function that takes an array and a function as parameters and returns an array
// of the same length as the original array but whose values are return of the provided function
//
// map([a1, a2, a3, a4, a5], func) returns [func(a1), func(a2), func(a3), func(a4), func(a5)]
//
// e.g.
// function toUpperCase(str) { return str.toUpperCase(); }
// map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]
//
// Note:
// - map returns an array with the same number of elements as lst
// - map returns a new array created by applying func to the elements of the original array
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function map(arr, func) {
  // arr is an array and func is a function
  let ans = [];
  for(let idx = 0; idx <= arr.length - 1; idx++){
    ans.push( func(arr[idx]) )
  }
  return ans
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
function charCount(str) {
  return str.length;
}

console.log(map(["Robin", "Bob", "Ric", "Jim"], charCount));

// This is needed for automated testing (more on that later)
module.exports = map;
