// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
// Solution 1
function maxChar(str) {
  let charMap = {};
  let maxValue = 0;
  let maxChar = '';

  for (let char of str){
    if(charMap[char]) charMap[char] += 1;
    else charMap[char] = 1;
  }
  console.log(charMap);

  for(let char in charMap){
    if(charMap[char] > maxValue){
      maxValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
maxChar("apple 1231111");
*/

// Solution 2
function maxChar(str){
  const charMap = str.split('').reduce((charObj, char) => ({...charObj, [char]: (charObj[char] += 1) || 1}), {});
  const values = Object.values(charMap);
  const maxChar = Object.keys(charMap).filter(key => charMap[key] === Math.max(...values)).join('');
  return maxChar;
}
// console.log(maxChar('naaaanaba'));
console.log(maxChar("p3333papii going to school"));
module.exports = maxChar;
