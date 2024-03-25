function distinctMultiples(str) {
  //count frequency of characters - case no bar, + they're only alphanumeric
  let counts = str.split('')
    .map(ch => ch.toLowerCase())
    .reduce((obj, ch) => {
      let freq = obj[ch] ? obj[ch] + 1 : 1;
      obj[ch] = freq;
      return obj;
    },{});

  //filter keys whose values > 1
  let repeatKeys = Object.keys(counts)
    .filter(k => counts[k] > 1);

  //return length of filtered keys
  return repeatKeys.length;
}

const p = console.log;
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5