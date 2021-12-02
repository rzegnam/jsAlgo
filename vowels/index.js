// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    // iterate, if it's on the list +1
    // how to iterate over the string, array, object - there is for of, for in, forEach ...
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str.toLowerCase()[i])) {
            count += 1
        }
    }

    return count
}

module.exports = vowels;
