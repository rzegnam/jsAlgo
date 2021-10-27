// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) =>
  cleanString(stringA) === cleanString(stringB);

const cleanString = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

module.exports = anagrams;

// Stephen's 1st solution
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// const buildCharMap = (str) => {
//   const charMap = {};

//   for (char of str.replace(/[^\w]/g, '')) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// };

//  my very bad solution :D
// function anagrams(stringA, stringB) {
//   const changedA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   const changedB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   const charsA = {};
//   const charsB = {};

//   for (let char of changedA) {
//     charsA[char] = charsA[char] + 1 || 1;
//   }

//   for (let char of changedB) {
//     charsB[char] = charsB[char] + 1 || 1;
//   }

//   if (changedA.length > changedB.length) {
//     for (let letter in charsA) {
//       if (charsA[letter] !== charsB[letter]) {
//         return false;
//       }
//     }
//   } else {
//     for (let letter in charsB) {
//       if (charsB[letter] !== charsA[letter]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }
