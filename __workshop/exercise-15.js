// Exercise 15
//
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.
//
// Hint: consider using .filter(), .indexOf() and .lastIndexOf()
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function filterNonUnique(arr) {
  // arr is an array of values of any type
  const unique = (myarr, num) => {
    return myarr.filter(n => n === num).length === 1
  }
  return [ ...new Set(arr.filter(el => unique(arr, el)))]

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));

// Create more test cases.
console.log(filterNonUnique([1, 1, 3, 3, 4, 4, 6, 7, 7, 8]));
console.log(filterNonUnique([2, 2, 4, 4, 4, 5, 8, 7, 6, 9]));
console.log(filterNonUnique([3, 3, 3, 3, 4, 4, 6, 7, 7, 8]));


// This is needed for automated testing (more on that later)
module.exports = filterNonUnique;
