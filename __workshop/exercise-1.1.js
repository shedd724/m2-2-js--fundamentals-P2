// Exercise 1.1
//
// Write a function that accepts a fullName and returns a count of the number of names in fullName
//
// Example:
// countNames('Morty Antoine Smith') should return 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countNames(fullName) {
  const nameArray = fullName.split(' ');
  return nameArray.length;
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(countNames("Morty Antoine Smith"));
// Create more test examples:
console.log(countNames("John Renouf"));
console.log(countNames("John Harold Miras "));
// This is needed for automated testing (more on that later)
module.exports = countNames;
