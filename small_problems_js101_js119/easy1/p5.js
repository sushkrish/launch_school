let rls = require('readline-sync');

console.log("What is the bill? ");
let amount = Number(rls.prompt());

console.log("What's the tip percentage?");
let tipPerc = Number(rls.prompt());

let tip = (amount * tipPerc / 100);
let total = amount + tip;

console.log("The tip is $" + tip.toFixed(2));
console.log("The total is $" + total.toFixed(2));