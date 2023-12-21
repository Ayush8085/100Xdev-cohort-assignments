/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// ------------- DONE ---------------

function isPalindrome(str) {

  const cleanStr = str.replace(/[^a-zA-z]/g, "");

  let i = 0;
  let j = cleanStr.length - 1;
  while(i < j) {
    if(cleanStr[i].toLowerCase() !== cleanStr[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
