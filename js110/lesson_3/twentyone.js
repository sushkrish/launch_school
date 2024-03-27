let rls = require('readline-sync');
const CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const GOAL_SCORE = 21;
const DEALER_MAX = 17;
function prompt(message) {
  console.log(message);
}

function initializeDeck() {
  let deck = [];
  CARDS.forEach(card => {
    SUITS.forEach(suit => deck.push([suit, card]));
  });
  return deck;
}

function drawCard(deck) {
  let idx = Math.floor(Math.random() * deck.length);
  let drawnCard = deck[idx];
  deck.splice(idx, 1);
  return drawnCard;
}

function textify(card) {
  return `${card[1]} of ${card[0]}`;
}

function displayHand(hand) {
  hand.forEach(card => {
    console.log(`\t${textify(card)}`);
  });
}

function displayHandsToPlayer(hands) {
  let playerHand = hands['Player'];
  let dealerHand = hands['Dealer'];
  console.log('Player has:');
  displayHand(playerHand);
  console.log();
  console.log(`Dealer has: \n\t${textify(dealerHand[0])}\n\t** hidden **`);
}

function displayHands(hands) {
  let playerHand = hands['Player'];
  let dealerHand = hands['Dealer'];
  console.log('Player has:');
  displayHand(playerHand);
  console.log();
  console.log('Dealer has:');
  displayHand(dealerHand);
}

function scoreHand(hand) {
  let score = 0;
  hand.forEach(([_, card]) => {
    if (['Jack', 'Queen', 'King'].includes(card)) {
      score += 10;
    } else if (card === 'Ace') {
      score += 11;
    } else {
      score += Number(card);
    }
  });

  hand.forEach(([_, card]) => {
    if (card === 'Ace' && score > GOAL_SCORE) {
      score -= 10;
    }
  });

  return score;
}

while (true) {
  //1. Initialize
  let deck = initializeDeck();

  //2. Deal cards to player and dealer
  let hands = {
    Player: [drawCard(deck), drawCard(deck)],
    Dealer: [drawCard(deck), drawCard(deck)]
  };

  //3. Player turn: hit or stay
  //   - repeat until bust or stay
  let playerScore = scoreHand(hands['Player']);
  while (true) {
    console.clear();
    displayHandsToPlayer(hands);
    prompt(`Your hand scores: ${playerScore}`);

    let action;
    while (true) {
      prompt("Hit or Stay? (h or s)");
      action = rls.question().trim();
      if (action === 's' || action === 'h') break;
    }
    if (action === 's') break;

    let card = drawCard(deck);
    prompt(`You drew ${textify(card)}`);
    hands['Player'].push(card);
    playerScore = scoreHand(hands['Player']);

    //4. If player bust, dealer wins.
    if (playerScore > GOAL_SCORE) {
      prompt(`Oops. Your hand scores: ${playerScore}`);
      prompt("You're BUSTED!");
      break;
    }
  }
  if (playerScore > GOAL_SCORE) break;

  //5. Dealer turn: hit or stay
  //   - repeat until total >= 17
  let dealerScore = scoreHand(hands['Dealer']);
  while (dealerScore < DEALER_MAX) {
    console.clear();
    displayHands(hands);
    prompt(`Dealer's hand scores: ${dealerScore}`);
    prompt("Dealer chose to hit!");

    let card = drawCard(deck);
    prompt(`Dealer drew ${textify(card)}`);
    hands['Dealer'].push(card);
    dealerScore = scoreHand(hands['Dealer']);

    //6. If dealer busts, player wins.
    if (dealerScore > GOAL_SCORE) {
      prompt(`Oops. Dealer's hand scores: ${dealerScore}`);
      prompt("Dealer is BUSTED!");
      break;
    }
  }
  if (dealerScore > GOAL_SCORE) break;

  //7. Compare cards and declare winner.
  console.clear();
  displayHands(hands);
  prompt(`Your score is: ${playerScore}`);
  prompt(`Dealer's score is: ${dealerScore}`);
  if (playerScore > dealerScore) {
    prompt(`You win!`);
  } else if (playerScore === dealerScore) {
    prompt(`It's a tie!`);
  } else {
    prompt ('Dealer wins!');
  }
  break;
}
