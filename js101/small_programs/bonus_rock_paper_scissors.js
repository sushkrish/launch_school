const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'lizard', 'spock','scissors', 'paper'];
const BEATS = {
  rock : ['lizard', 'scissors'],
  lizard : ['spock', 'paper'],
  spock : ['scissors', 'rock'],
  scissors : ['paper', 'lizard'],
  paper : ['rock', 'spock'],
};
const ALIAS = {
  r : 'rock',
  l : 'lizard',
  sp : 'spock',
  sc : 'scissors',
  p : 'paper'
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function getWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return "tie";
  } else if (BEATS[choice].includes(computerChoice)) {
    return "user";
  } else {
    return "computer";
  }
}

function displayRoundWinner(winner) {
  if (winner === "tie") {
    prompt("It's a tie.");
  } else if (winner === "user") {
    prompt("You won!!");
  } else {
    prompt("Computer won :(");
  }
}

function displayFinalWinner(score) {
  if (score.user === 3) {
    prompt(`You win the best of 5!!! ${score.user} - ${score.computer}`);
  } else if (score.computer === 3) {
    prompt(`Computer wins the best of 5 :( ${score.computer} - ${score.user}`);
  }
}

function displayScore(score) {
  prompt(`TOTAL: User ${score.user} | Computer ${score.computer} `);
}

function gameOver(score) {
  return (score.user === 3 || score.computer === 3);
}

while (true) {
  //initialize scores for best of 5.
  let score = {user : 0, computer : 0, tie : 0};

  while (!gameOver(score)) {
    //User makes a choice
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    prompt(`Please enter abbrevations: ${Object.keys(ALIAS).join(', ')}`);
    let choice = readline.question();

    while (!Object.keys(ALIAS).includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }
    choice = ALIAS[choice];

    //Computer makes a choice
    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    //score is updated and displayed
    prompt(`You chose ${choice}\nComputer chose ${computerChoice}`);
    let winner = getWinner(choice, computerChoice);
    score[winner] += 1;
    displayRoundWinner(winner);
    displayScore(score);
  }

  //declare winner
  displayFinalWinner(score);

  //Play again?
  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (!['y', 'n'].includes(answer)) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer !== 'y') break;
}