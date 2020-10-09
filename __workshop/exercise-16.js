// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
  // num1 and num2 are Numbers
  let ans = [];
  const sumOfCubes = n => {
    let arr = n.toString().split("").map(el => parseInt(el))
    let sumn = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
      sumn += arr[i] ** 3;
    }
      return sumn;
    }
    for(let idx = num1; idx <= num2; idx++){
      let sumOC = sumOfCubes(idx);
        if(sumOC === idx){
          ans.push(idx)
        }
    }

    return ans
  }
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
