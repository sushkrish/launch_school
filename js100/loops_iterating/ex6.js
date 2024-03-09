function factorial(n){
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

rls = require('readline-sync');
num = Number(rls.question("Enter a number: "));

if (num <= 0 || !Number.isInteger(num)){
  console.log(num + ' is not a positive integer');
} else {
  console.log(`${num}! is ${factorial(num)}`);
}
