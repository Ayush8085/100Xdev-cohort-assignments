/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// --------- DONE -----------

// isAnagram('sspar', 'rasps')

function isAnagram(str1, str2) {

  const isObjectEmpty = (objectName) => {
    for (let prop in objectName) {
      if (objectName.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };

  if (str1.length != str2.length) {
    return false;
  }

  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    let strObj = str1[i].toLowerCase();
    if (!obj[strObj]) {
      obj[strObj] = 1;
      console.log("yes");
    }
    else {
      let temp = obj[strObj] + 1;
      obj[strObj] = temp;
      console.log("NO");
    }
  }
  console.log("OBJ: ", obj);

  for (let i = 0; i < str1.length; i++) {
    let strObj = str2[i].toLowerCase();

    if (obj[strObj]) {
      let temp = obj[strObj] - 1;
      if (temp == 0) {
        delete obj[strObj]
      }
      else {
        obj[strObj] = temp;
      }
    }
    else {
      return false;
      // console.log('false');
    }
  }
  console.log("AGAIN: ", obj);

  return isObjectEmpty(obj);

}


module.exports = isAnagram;