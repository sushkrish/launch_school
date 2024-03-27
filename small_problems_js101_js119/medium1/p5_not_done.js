const WORD_TO_DIGIT = {
  zero : 0,
  one : 1,
  two : 2,
  three : 3,
  four : 4, 
  five : 5, 
  six : 6, 
  seven : 7, 
  eight : 8,
  nine : 9
}

function replaceWord(word) {
}

function wordToDigit(str) {
  //split words 
  //map each word: if word is a key in digit obj, return its number char.
  //join back to string
  return str.split(' ')
    .map(word => {
      let num = WORD_TO_DIGIT[word];
      console.log(word, num);
      return num ? String(num) : word
    })
    .join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."