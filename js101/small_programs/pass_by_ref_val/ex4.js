function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

/**
 * ['Hello', 'Goodbye']
 * ['Hi', 'Goodbye']
 */