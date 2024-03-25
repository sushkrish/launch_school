function isPrime(num) {
  // if num = 2, return true
  if (num === 2) return true;
  //iterate i from 2 to num - 1,
  for (let div = 2; div < num; div++) {
    //if div is a divisor of num, return false
    if (num % div === 0) return false;
  }
  // return true
  return true;
}

function nearestPrimeSum(integers) {
  if (integers.length < 2 || integers.some(x => x < 0)) return undefined;

  //sum all values in array
  let sum = integers.reduce((sum, val) => sum + val, 0);

  //find smallest prime number greater than sum
  let curNum = sum + 1;
  do {
    //return prime number - sum
    if (isPrime(curNum)) return curNum - sum;
    curNum++;
  } while (true);
}

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);