// Exercise 7
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns a new list with all the elements
// that have a length greater than 5.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function keepLong(list) {
  // list is an array of strings
  return newArray = list.filter(function (a) {
    return (a.length > 5);
  })
}	

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

// Create more test cases.
console.log(
  keepLong(["Sheddyra", "Jean", "Harold", "Charles", "Kim", "John"])
);

// This is needed for automated testing (more on that later)
module.exports = keepLong;
