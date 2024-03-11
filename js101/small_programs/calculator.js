console.log("Welcome to calculator");

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Ask the user for the first number.
prompt("What's the first number? ");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

number1 = Number(number1);

// Ask the user for the second number.
prompt("What's the second number? ");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

number2 = Number(number2);

// Ask the user for an operation to perform.
prompt("What operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide");
let operation = readline.question().toLowerCase();

while (!['1','2','3','4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4');
  operation = readline.question();
}

let result = NaN;
// Perform the operation on the two numbers.
switch (operation) {
  case "1":
  case "add":
    result = number1 + number2;
    break;
  case "2":
  case "subtract":
    result = number1 - number2;
    break;
  case "3":
  case "multiply":
    result = number1 * number2;
    break;
  case "4":
  case "divide":
    result = number1 / number2;
    break;
  default:
    result = NaN;
}

// Print the result to the terminal.
prompt(`The result is: ${result}`);
