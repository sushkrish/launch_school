function factorial(n){
  if (n <= 0 || !Number.isInteger(n)){ 
    console.log(n + ' is not a positive integer');
    return;
  }

  fact = 1;
  for(var i = 2; i <= n; i+=1)
    fact *= i;
  return fact;
}

rls = require('readline-sync');
num = Number(rls.question("Enter a number: "));
console.log(`${num}! is ${factorial(num)}`);
