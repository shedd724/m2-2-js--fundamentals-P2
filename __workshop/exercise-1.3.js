// Exercise 1.3
//
// Write a function that accepts a string of words
// and returns the character-count of that string. (include spaces)
//
// Example:
// characterCount("ab c def") should return 6
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function characterCount(string) {
 
  var arrayString = string.split(" ");
  var string2 = arrayString.join("");
  return string2.length;
  }
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(characterCount("wubba lubba dub dub"));

// Create more test examples.
console.log(characterCount("wubba lubba         dub"));
console.log(characterCount("dub   dub lubba                     dub"));
// This is needed for automated testing (more on that later)
module.exports = characterCount;
