let rls = require('readline-sync');

function factorial(num) {
  return num === 1 ? 1 : (num * factorial (num - 1));
}

console.log("Enter an integer greater than zero: ");
let num = Number(rls.prompt());

console.log(`Enter "s" to compute the sum, or "p" to compute the product.`);
let choice = rls.prompt();

if (choice === 's') {
  let sum = num * (num + 1) / 2;
  console.log(`The sum of integers between 1 and ${num} is ${sum}.`);
} else if (choice === 'p') {
  let product = factorial(num);
  console.log(`The product of integers between 1 and ${num} is ${product}.`);
}