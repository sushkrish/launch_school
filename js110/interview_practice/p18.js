function equalSumIndex(integers) {
  if (integers.length === 0) return 0;

  //init as if idx =0: leftSum = 0, rightSum = sum full array - arr[0]
  let leftSum = 0;
  let rightSum = integers.reduce((sum, val) => sum + val, 0) - integers[0];
  let idx = 0;
  //iterate starting idx = 0
  while (idx < integers.length) {
    // if leftSum = rightSum return idx
    if (leftSum === rightSum) return idx;
    // else increment idx (leftsum += cur idx val), idx++, right-=cur idx val
    leftSum += integers[idx];
    idx++;
    rightSum -= integers[idx]; // the order of these ops matters.
  }
  return -1;
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);

/* The following test case could return 0 or 3. Since we're
* supposed to return the smallest correct index, the correct
* return value is 0.
*/
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);