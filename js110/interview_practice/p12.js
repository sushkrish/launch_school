function isPangram(str) {
  //create an object counting all chars in str, lowercased
  let chars = str.toLowerCase()
    .split('')
    .reduce((obj, ch) => {
      if ('abcdefghijklmnopqrstuvwxyz'.includes(ch)) {
        obj[ch] = 1;
      }
      return obj;
    }, {});

  //extract keys of obj, sort, combine into a string
  let newStr = Object.keys(chars)
    .sort()
    .join('');

  //the string should equal 'abcdefghijklmnopqrstuvwxyz' to be a pangram.
  return newStr === 'abcdefghijklmnopqrstuvwxyz';
}

const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);