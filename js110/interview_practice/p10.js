function evenSubstrings(str) {
  // list all substrings
  let substrs = [];
  for (let len = 1; len <= str.length; len++) {
    for (let idx = 0; idx + len <= str.length; idx++) {
      substrs.push(str.slice(idx, idx + len));
    }
  }

  // filter to substrings which would be even numbers
  let evenSubstrs = substrs.filter(num => Number(num) % 2 === 0);

  // return number of substrings
  return evenSubstrs.length;
}

const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);