function longestVowelSubstring(str) {
  //replace all non-vowels in string with spaces
  let nonVowelStr = str.split('')
    .map(ch => {
      if ('aeiou'.includes(ch)) {
        return ch;
      } else {
        return ' ';
      }
    })
    .join('');

  //split string on space
  let subStrings = nonVowelStr.split(' ');

  //count size of each element in array
  let sizes = subStrings.map(substr => substr.length);

  //return largest size count
  return Math.max(...sizes);
}

const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);