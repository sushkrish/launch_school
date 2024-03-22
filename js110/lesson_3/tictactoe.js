const SIGNS = {player1: 'X', player2: 'O'};
const PLAYERS = {player1: 'You', player2: 'Computer'};
let rls = require('readline-sync');

function prompt(message){
  console.log(`==> ${message}`);
}

function getEmptyBoard(){
  board = {};
  for (let square = 1; square < 10; square++){
    board[square] = square.toString();
  }
  return board;
}

function displayBoard(board){
  console.clear();

  console.log(`You are ${SIGNS['player1']}. ${PLAYERS['player2']} is ${SIGNS['player2']}.`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function getEmptySquares(board){
  return Object.keys(board)
  .filter(key => !Object.values(SIGNS).includes(board[key]));
}

function playerChoosesSquare(board) {
  let square;
  let empty = getEmptySquares(board);

  while (true) {
    prompt(`Choose one of these squares: ${empty.join(', ')}`);
    square = rls.question().trim();
    if (empty.includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }

  board[Number(square)] = SIGNS['player1'];
}

function computerChoosesSquare(board) {
  let empty = getEmptySquares(board);
  let square = empty[Math.floor(Math.random() * empty.length)];
  board[Number(square)] = SIGNS['player2'];
}

function someoneWon(board){
  return false;
}

function boardFull(board){
  return getEmptySquares(board).length === 0;
}

function someoneWon(board){
  return !!detectWinner(board);
}

function detectWinner(board){
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === SIGNS['player1'] &&
        board[sq2] === SIGNS['player1'] &&
        board[sq3] === SIGNS['player1']
    ) {
      return PLAYERS['player1'];
    } else if (
        board[sq1] === SIGNS['player2'] &&
        board[sq2] === SIGNS['player2'] &&
        board[sq3] === SIGNS['player2']
    ) {
      return  PLAYERS['player2'];
    }
  }

  return null;
}

while (true) {
  let board = getEmptyBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    console.log(`${detectWinner(board)} won!`);
  } else {
    console("It's a tie!");
  }

  prompt("Play again? (y or n): ")
  let choice = rls.question().trim();
  if (choice.toLowerCase() !== 'y') break;
} 

prompt('Thanks for playing Tic Tac Toe!')