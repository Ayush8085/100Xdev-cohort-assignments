/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// ------------- DONE ---------------

// countVowels("Able, was I ere I saw Elba!")

function countVowels(str) {
  // Your code here
  const VOWELS = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1,
  }

  // const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "");
  // console.log("Clean str:", cleanStr);

  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (VOWELS[str[i]]) vowelsCount++;
  }

  return vowelsCount;

}

module.exports = countVowels;