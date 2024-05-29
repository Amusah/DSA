// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
  // Solution 1

  function palindrome(str) {
  // const testStr = str.toLowerCase();
  // if(testStr.split('').reduce((revStr, char) => char + revStr, '') === str) return true;

  // return false;
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
*/
// console.log(palindrome('Ama'))

// Solution 2
function palindrome(str) {
  return str.split('').every((char, idx) => {
    return char === str[str.length - idx - 1]
  })
}

module.exports = palindrome;
