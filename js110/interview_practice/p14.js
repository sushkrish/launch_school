function sevenEleven(integer) {
  //return 0 if int is negative
  if (integer < 0) return 0;
  let sum = 0;
  //iterate through all nums from 7 to integer - 1
  for (let num = 0; num < integer; num++) {
    if (num % 7 === 0 || num % 11 === 0) {
      // if num % 7 is 0 or num % 11 is 0, add it to sum
      sum += num;
    }
  }
  //return sum
  return sum;
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);