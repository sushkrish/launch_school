let readline = require('readline-sync');

const BEATS = {
  rock : ['lizard', 'scissors'],
  lizard : ['spock', 'paper'],
  spock : ['scissors', 'rock'],
  scissors : ['paper', 'lizard'],
  paper : ['rock', 'spock'],
};

//orchestration
const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  winningScore: 5,

  displayWelcomeMessage() {
    console.log('==> Welcome to Rock, Paper, Scissors. First to 5 wins game!');
  },

  displayGoodbyeMessage() {
    console.log('==> Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  getWinner() {
    let hMove = this.human.move;
    let cMove = this.computer.move;

    if (hMove === cMove) {
      return null;
    } else if (BEATS[hMove].includes(cMove)) {
      return this.human;
    } else {
      return this.computer;
    }
  },

  displayWinner() {
    let hMove = this.human.move;
    let cMove = this.computer.move;

    console.log(`==> You chose: ${hMove}`);
    console.log(`==> The computer chose: ${cMove}`);

    let winner = this.getWinner();

    if (winner === this.human) {
      console.log('==> You win!');
    } else if (winner === this.computer) {
      console.log('==> Computer wins!');
    } else {
      console.log("==> It's a tie");
    }
    console.log(`==> You: ${this.human.score} | Computer: ${this.computer.score}`);
  },

  playAgain() {
    console.log('==> Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    let gameover = false;
    while (!gameover) {
      this.human.choose();
      this.computer.choose();
      let winner = this.getWinner();
      if (winner !== null) winner.score++;
      gameover = (this.human.score === this.winningScore
        || this.computer.score === this.winningScore);
      this.displayWinner();
      debugger;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();

function createPlayer() {
  return {
    move: null,
    pastMoves: [],
    score: 0,
    pastScores: [],
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    smartChoice() {
      //gather choices, and create even weights object
      let choices = Object.keys(BEATS);
      let weights = choices.reduce((obj, key) => {
        obj[key] = 10;
        return obj;
      },{});

      //set weights based on past outcomes
      let scoreChange = [];
      for (let idx = 1; idx < this.pastScores.length; idx++) {
        scoreChange.push(this.pastScores[idx] - this.pastScores[idx - 1]);
      }
      scoreChange.forEach((change, idx) => {
        if (change > 0) {
          weights[this.pastMoves[idx]] += 5;
        } else {
          weights[this.pastMoves[idx]] -= 2;
        }
      });

      //random choice based on new weights
      let cumWeights = [];
      let sum = 0;
      Object.values(weights).forEach(val => {
        sum += val;
        cumWeights.push(sum);
      });

      let randomIndex = Math.floor(Math.random() * cumWeights[choices.length - 1]);
      let choiceIndex = -1;
      for (let idx = 0; idx < cumWeights.length; idx++ ) {
        let val = cumWeights[idx];
        if (randomIndex < val) {
          console.log(randomIndex, val, idx);
          choiceIndex = idx;
          break;
        }
      }

      return choices[choiceIndex];
    },

    choose() {
      this.pastScores.push(this.score); // not good organization.

      const choices = Object.keys(BEATS);
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = this.smartChoice(); //choices[randomIndex];
      this.pastMoves.push(this.move);
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('>>> Please choose rock, paper, scissors, lizard, or spock:');
        choice = readline.question();
        if (Object.keys(BEATS).includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
      this.pastMoves.push(this.move);
    },
  };

  return Object.assign(playerObject, humanObject);
}