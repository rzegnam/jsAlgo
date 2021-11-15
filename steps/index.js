// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  // base case
  if (n === row) {
    return;
  }

  // case: if the stair string has a length === n then we are at the end of a row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // case: if the length of the stair string is less than or equal to the row number we're working on, we add a #, otherwise add a space
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

module.exports = steps;

// my solution
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log("#".repeat(i) + ' '.repeat(n - i))
//     }
// }
