function swap(str) {
  //for each word, swap first and last letter
  let words = str.split(' ')
    .map(word => {
      let chars = word.split('');
      let temp = chars[0];
      chars[0] = chars[chars.length - 1];
      chars[chars.length - 1] = temp;
      return chars.join('');
    });
  //join back to sentence and return
  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"