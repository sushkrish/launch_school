function wordSizes(sentence) {
  let wordLengths = sentence.split(' ').map(word => word.length);
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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
