// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat((n - 1 - i))
        const hashes = '#'.repeat(2 * i + 1)
        console.log(spaces + hashes + spaces)
    }

}

module.exports = pyramid;
