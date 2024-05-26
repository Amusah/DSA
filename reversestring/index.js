// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**************** solution 1 ****************/

/*
  function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
    // return str.split('').reverse().join();
}
console.log(reverse('Amusah'));

module.exports = reverse;
*/

/**************** solution 2 ****************/

/*
  function reverse2(str){
  let reversedStr = "";
  for(let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
  }

  // with for of loop
    for(let char of str) {
    reversedStr = char + reversedStr;
  }
  
  return reversedStr;
}
console.log(reverse2('Henry'));

module.exports = reverse2;
*/

/**************** solution 3 ****************/
function reverse3(str) {
  return str.split("").reduce((reversedStr, char) => char + reversedStr, "");
}
reverse3("yeboah");
// console.log(reverse3("yeboah"));
module.exports = reverse3;
