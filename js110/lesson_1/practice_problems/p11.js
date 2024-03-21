let statement = "The Flintstones Rock";
let letterFreq = {};
statement.split('').filter(ch => ch !== ' ').forEach( ch => {
  if (Object.hasOwn(letterFreq, ch)) {
    letterFreq[ch] += 1;
  } else {
    letterFreq[ch] = 1;
  }
});

console.log("hi");
console.log(letterFreq);