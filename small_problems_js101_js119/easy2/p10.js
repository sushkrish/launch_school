let rls = require('readline-sync');

console.log('==> What is your age? ');
let age = rls.prompt();

console.log('==> At what age would you like to retire? ');
let retirementAge = rls.prompt();

let yearsToRetire = retirementAge - age;
let today = new Date();
let curYear = today.getFullYear();
console.log(`==> It's ${curYear}. You will retire in ${curYear + yearsToRetire}.`);
console.log(`==> You have only ${yearsToRetire} years of work to go!`);