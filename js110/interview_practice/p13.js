function countLetters(str) {
  return str.split('').reduce((obj, ch) => {
    let count = obj[ch] ? obj[ch] + 1 : 1;
    obj[ch] = count;
    return obj;
  }, {});
}

function unscramble(str1, str2) {
  // obj with counts of letters in str1
  let counts1 = countLetters(str1);
  // obj with counts of letters in str2
  let counts2 = countLetters(str2);
  // for letters in str2, check if str1's value for that char is >= str2's
  return Object.keys(counts2).every(ch => counts1[ch] >= counts2[ch]);
}

const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);