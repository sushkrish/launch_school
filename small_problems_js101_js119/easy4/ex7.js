function letterCount(word) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  return word.toLowerCase()
    .split('')
    .filter(ch => letters.includes(ch))
    .length;
}

function wordSizes(sentence) {
  let wordLengths = sentence.split(' ').map(word => letterCount(word));
  let frequency = wordLengths.reduce((obj, length) => {
    if (obj.hasOwnProperty(length)) {
      obj[length] += 1;
    } else {
      obj[length] = 1;
    }
    return obj;
  }, {});
  return frequency;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2}
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3}
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}