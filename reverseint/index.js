// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   if(n === 0) return 0;
//   const reversed = Number(n.toString().split("").reverse().join(""));
//   console.log(reversed)

//   // if(n < 0) {
//   //   return parseInt(reversed + '-');
//   // }
//   // return parseInt(reversed) * Math.sign(n);
//   return reversed * Math.sign(n)
// }
// console.log(reverseInt(-90));


/***** Solution 2 ******/

function reverseInt(n) {
  if(n === 0) return 0;

  let positiveNum;
  let reversed;
  if(n < 0) {
    positiveNum = n * -1;
    reversed = String(positiveNum).split("").reverse().join("");
    return Number(reversed) * Math.sign(n);
  }
  reversed = String(n).split("").reverse().join("");
  return Number(reversed) * Math.sign(n)
}
console.log(reverseInt(100));
module.exports = reverseInt;
