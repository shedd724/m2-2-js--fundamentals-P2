// Exercise 12
//
// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getLetterGrade(grades) {
  // grades is an array of numbers
  let sum = 0;
  let letterGrade = "";
  grades.forEach((element) => {
    sum += element;
  });
  average = parseInt((sum / grades.length).toFixed(0));

  if (average < 60) {
    letterGrade = "F";
  } else if (average < 70) {
    letterGrade = "D";
  } else if (average < 80) {
    letterGrade = "C";
  } else if (average < 90) {
    letterGrade = "B";
  } else {
    letterGrade = "A";
  }
  return letterGrade;
}

console.log(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Create more test cases.
console.log(getLetterGrade([56, 48, 65, 55, 59, 78, 62, 45]));
console.log(getLetterGrade([48, 95, 75, 48, 69, 75, 72, 60]));
// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
