function mostCommonChar(str) {
  //if not atleast 1 character in input string.
  if (str === '') return '';

  str = str.toLowerCase();

  //create object counts with frequencies of letters.
  let counts = str.split('')
    .reduce((counts, ch) => {
      if (counts.hasOwnProperty(ch)) {
        counts[ch] += 1;
      } else {
        counts[ch] = 1;
      }
      return counts;
    }, {});
  debugger;
  //iterate through string again, keep track of most freq one from object.
  let mostFreq = str[0];
  for (let ch of str) {
    if (counts[ch] > counts[mostFreq]) {
      mostFreq = ch;
    }
  }
  //return most freq tracked.
  return mostFreq;
}

const p = console.log;
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');