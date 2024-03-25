function closestNumbers(numbers) {
  //assuming numbers has atleast 2 values.
  let minSet = [numbers[0], numbers[1]];
  let minDiff = Math.abs(minSet[0] - minSet[1]);
  //loop over numbers with var idx1
  for (let idx1 = 0; idx1 < numbers.length; idx1++) {
    // loop over numbers with var idx2 starting at idx+1
    for (let idx2 = idx1 + 1; idx2 < numbers.length; idx2++) {
      // compare val diff between elements at idx1 and idx2 to replace minset.
      let diff = Math.abs(numbers[idx1] - numbers[idx2]);
      if (diff < minDiff) {
        minSet = [numbers[idx1], numbers[idx2]];
        minDiff = diff;
      }
    }
  }
  return minSet;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));