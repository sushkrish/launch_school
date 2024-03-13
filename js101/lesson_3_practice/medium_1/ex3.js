function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(10));
console.log(factors(-10));
console.log(factors(0));
