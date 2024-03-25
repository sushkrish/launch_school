function countSubstrings(str, substr) {
  let count = 0;
  let idx = 0;
  //iterate through str with var idx while idx + len(substr) <= len(str)
  while (idx + substr.length <= str.length) {
    // check if str.slice(idx, idx + substr.len) === substr
    if (str.slice(idx, idx + substr.length) === substr) {
      // if yes, count occurrence and skip ahead to idx = idx + substr.len
      count++;
      idx += substr.length;
    } else {
      idx++;
      // else idx ++
    }
  }
  return count;
}

const p = console.log;
p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);