// Exercise 1.5
//
// Write a function that accepts a coded string and an array of "notCode" words.
// This function should return the decoded string (with all of the notCode words removed.)
//
// Example:
// decodeMessage("I amnot the walrus.", ["not"]) should return "I am the walrus."
// shortenName(Morty Smith") should return "Morty Smith"
// shortenName(Morty") should return "Morty"
// shortenName(Morty Antoine Fred Bacon Smith") should return "Morty Smith"

//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function decodeMessage(string, notCode) {
  // complete the function
  for (let i = 0; i < notCode.length; i++){

    arrayString = string.split(notCode[i]);
    let newArray = arrayString[0] + arrayString[1];
    string = newArray;
    }
    return string;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(decodeMessage("I anotm tbaconhe walrus.", ["not", "bacon"]));
console.log(
  decodeMessage(
    "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!",
    [
      "summer",
      "bacon",
      "scary",
      "intergalactic",
      "jerry",
      "morty",
      "beth",
      "family",
    ]
  )
);
// Create more test examples.
console.log(decodeMessage("I anotm tbaconhe queen.", ["not", "bacon"]));
console.log(
  decodeMessage(
    "summerlobaconokfamily ascaryt mintergalactice, I'jerrym quemortybethen of queens!",
    [
      "summer",
      "bacon",
      "scary",
      "intergalactic",
      "jerry",
      "morty",
      "beth",
      "family",
    ]
  )
);

// This is needed for automated testing (more on that later)
module.exports = decodeMessage;
