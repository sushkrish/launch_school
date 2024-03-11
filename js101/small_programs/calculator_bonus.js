const readline = require("readline-sync");
const text = require('./calculator_messages.json');

console.log(text.intro);

let runCalculator = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


while (runCalculator) {
  // Ask the user for the first number.
  prompt(text.getNum1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(text.invalidNum);
    number1 = readline.question();
  }

  number1 = Number(number1);

  // Ask the user for the second number.
  prompt(text.getNum2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(text.invalidNum);
    number2 = readline.question();
  }

  number2 = Number(number2);

  // Ask the user for an operation to perform.
  prompt(text.getOperator);
  let operation = readline.question().toLowerCase();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(text.invalidOperator);
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
  prompt(`${text.shareResult} ${result}`);

  // Ask the user if they want to do another calculation.
  prompt(text.repeatCalc);
  let again = readline.question().toLowerCase();

  while (!['y', 'n'].includes(again)) {
    prompt(text.invalidYN);
    again = readline.question();
  }

  runCalculator = (again === 'y');
}