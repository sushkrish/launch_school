function pairs(integers) {
  // array size <= 1, return 0;
  if (integers.length <= 1) return 0;

  // count occurrences of each val and store in an obj
  let counts = integers.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;
    return acc;
  }, {});

  // iterate over values of obj, floor(val / 2) is #pairs per value.
  let pairs = Object.values(counts)
    .reduce((sum, val) => sum + Math.floor(val / 2), 0);

  return pairs;
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);