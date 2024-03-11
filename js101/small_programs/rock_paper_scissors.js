
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

while (true) {
  //User makes a choice
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  //Computer makes a choice
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  //Winner is displayed
  prompt(`You chose ${choice}\nComputer chose ${computerChoice}`);
  displayWinner(choice, computerChoice);


  //Play again?
  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (!['y', 'n'].includes(answer)) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer !== 'y') break;
}