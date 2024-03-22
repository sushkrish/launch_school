let rls = require('readline-sync');

console.log("==> Enter the first number: ");
let n1 = rls.prompt();

console.log("==> Enter the second number: ");
let n2 = rls.prompt();

console.log(`==> ${n1} + ${n2} = ${n1 + n2}`);
console.log(`==> ${n1} - ${n2} = ${n1 - n2}`);
console.log(`==> ${n1} * ${n2} = ${n1 * n2}`);
console.log(`==> ${n1} / ${n2} = ${n1 / n2}`);
console.log(`==> ${n1} % ${n2} = ${n1 % n2}`);
console.log(`==> ${n1} ** ${n2} = ${n1 ** n2}`);