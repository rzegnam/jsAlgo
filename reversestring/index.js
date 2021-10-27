// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;

// 1st solution - mine
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// 2nd solution - mine
// function reverse(str) {
//   let reversed = ''
//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }
//   return reversed
// }

// 2nd solution - Stephen
// let reversed = '';
// // avoid classic loops! use for ... of instead
// for (let character of str) {
//   reversed = character + reversed;
// }

// return reversed;
