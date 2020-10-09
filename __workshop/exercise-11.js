// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  // grades is an array of numbers
  let avCalc = grades.reduce(function (a, b) {
    return (a + b);
  });
  return Math.round(avCalc / grades.length);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

console.log(calculateAverage([29, 30, 40, 40, 10, 80]));
console.log(calculateAverage([1, 10, 10, 1, 10, 1]));
// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
