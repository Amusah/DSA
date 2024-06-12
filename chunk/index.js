// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/********* SOLUTION 1 *********/

// function chunk(array, size) {
//   const chunked = [];
//   for(element of array){
//     if(!chunked[chunked.length - 1] || chunked[chunked.length - 1].length === size){
//       chunked.push([element]);
//     } else{
//       chunked[chunked.length - 1].push(element);
//     }
//   }
//   return chunked;
// }
// console.log(chunk([1,2,3,4,5,6, 4], 2))

/********* SOLUTION 2 **********/

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 4], 2));

module.exports = chunk;
