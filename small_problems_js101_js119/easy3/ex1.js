function crunch(str) {
  let newStr = '';
  let curChar = '';
  for (let ch of str) {
    if (curChar !== ch) {
      newStr += curChar;
      curChar = ch;
    }
  }
  newStr += curChar;
  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""