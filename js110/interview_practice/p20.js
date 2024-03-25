function whatIsDifferent(numbers) {
  if (numbers.length < 3) return undefined;
  //use the first three vals to find the repeating number.
  let repeating = numbers[0] === numbers[1] ? numbers[0] : numbers[2];

  //iterate through array to find a number not equal to the repeating number.
  let idx = 0;
  while (idx < numbers.length) {
    if (numbers[idx] !== repeating) return numbers[idx];
    idx++;
  }

  //should never reach this given constraints, added for eslint.
  return undefined;
}

const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);