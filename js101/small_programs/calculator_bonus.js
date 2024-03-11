const readline = require("readline-sync");
const TEXT = require('./calculator_messages.json');
let language = 'ES';

console.log(TEXT[language].intro);

let runCalculator = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


while (runCalculator) {
  // Ask the user for the first number.
  prompt(TEXT[language].getNum1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(TEXT[language].invalidNum);
    number1 = readline.question();
  }

  number1 = Number(number1);

  // Ask the user for the second number.
  prompt(TEXT[language].getNum2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(TEXT[language].invalidNum);
    number2 = readline.question();
  }

  number2 = Number(number2);

  // Ask the user for an operation to perform.
  prompt(TEXT[language].getOperator);
  let operation = readline.question().toLowerCase();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(TEXT[language].invalidOperator);
    operation = readline.question();
  }

  let result = NaN;
  // Perform the operation on the two numbers.
  switch (operation) {
    case "1":
      result = number1 + number2;
      break;
    case "2":
      result = number1 - number2;
      break;
    case "3":
      result = number1 * number2;
      break;
    case "4":
      result = number1 / number2;
      break;
    default:
      result = NaN;
  }

  // Print the result to the terminal.
  prompt(`${TEXT[language].shareResult} ${result}`);

  // Ask the user if they want to do another calculation.
  prompt(TEXT[language].repeatCalc);
  let again = readline.question().toLowerCase();

  while (!['y', 'n'].includes(again)) {
    prompt(TEXT[language].invalidYN);
    again = readline.question();
  }

  runCalculator = (again === 'y');
}