// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]] --> []
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    let lastElement = chunked[chunked.length - 1];

    if (!lastElement || lastElement.length === size) {
      chunked.push([element]);
    } else {
      lastElement.push(element);
    }
  }

  return chunked;
}

chunk([1, 2, 3, 4], 2);

module.exports = chunk;

// my solution
// function chunk(array, size) {
//   const megaArray = [];
//   for (let i = 0; i < array.length; i = i + size) {
//     megaArray.push(array.slice(i, i + size));
//   }
//   return megaArray;
// }
