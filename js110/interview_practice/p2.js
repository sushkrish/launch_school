let arraySum = (arr) => arr.reduce((acc, el) => acc + el, 0);

function minimumSum(arr) {
  // if arr.length < 5, return null
  if (arr.length < 5) return null;

  // var to store minSum candidate - first 5 consec values
  let minSum = arraySum(arr.slice(0,5));
  debugger;
  // iterate through arr, looking for sequences with smaller minSum.
  let idx = 0;
  while (idx + 5 <= arr.length) {
    let sum = arraySum(arr.slice(idx, idx + 5));
    debugger;
    if (sum < minSum) {
      minSum = sum;
    }
    idx++;
  }
  debugger;
  return minSum;
}

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);