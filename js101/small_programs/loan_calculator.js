let readline = require("readline-sync");

function prompt(message) {
  console.log("=> " + message);
}

function invalidNumber(amount) {
  return amount.trimStart() === '' || Number.isNaN(Number(amount));
}

prompt("Let's find out your monthly loan payment.");

//get inputs: loan amount, APR (annual percentage rate), loan duration
//loan amount
prompt("What's your total loan amount?");
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt("That didn't work. Enter a number only.");
  loanAmount = readline.question();
}

loanAmount = Number(loanAmount);

//APR
prompt("What's your APR? e.g. enter 78 for 78%");
let apr = readline.question();

while (invalidNumber(apr)) {
  prompt("That didn't work. Enter a number only.");
  apr = readline.question();
}

apr = Number(apr) / 100;

//loan duration in years
prompt("What's your loan duration in years?");
let durationYrs = readline.question();

while (invalidNumber(durationYrs)) {
  prompt("That didn't work. Enter a number only.");
  durationYrs = readline.question();
}

durationYrs = parseFloat(durationYrs);

//calculate monthly interest rate, loan duration in months
let mpr = apr / 12;
let durationMonths = durationYrs * 12;

//calculate monthly payment
let multiple = mpr / (1 - Math.pow((1 + mpr), (-durationMonths)));
let monthlyPayment = loanAmount * multiple;

//output payment amount in dollars.
prompt("Your monthly payment is: $" + monthlyPayment.toFixed(2));