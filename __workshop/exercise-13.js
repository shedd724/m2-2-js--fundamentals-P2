// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  
  return str.split("").filter(ch => ch === 'B').length
}	

console.log(countBs("deBate"))
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.
console.log(countBs("Brave"))
console.log(countBs("Beautiful"))
console.log(countBs("bumBBleBee"))
// This is needed for automated testing (more on that later)
module.exports = countBs;
