CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, :jack, :queen, :king, :ace]
STATE = [:PLAYING, :PLAYER_BUSTED, :DEALER_BUSTED, :PLAYER_WIN, :DEALER_WIN, :TIE]
ACE_DIFF = 10
WIN_TOTAL = 21
DEALER_LIMIT = 17

def init_deck
  { heart: CARDS.clone.shuffle,
    diamond: CARDS.clone.shuffle,
    clover: CARDS.clone.shuffle,
    spade: CARDS.clone.shuffle }
end

def card_value(card)
  case card
  when :jack then 10
  when :queen then 10
  when :king then 10
  when :ace then 11
  else card
  end
end

def draw_card(deck)
  deck[deck.keys.sample].pop
end

def score(hand)
  # returns max possible score less than 2
  total = hand.map { |c| card_value(c) }.sum
  num_aces = hand.count { |c| c == :ace }
  num_aces.times { total -= ACE_DIFF if total > WIN_TOTAL }
  total
end

def compare_cards(dealer_score, player_score)
  if dealer_score > player_score
    :DEALER_WIN
  elsif player_score > dealer_score
    :PLAYER_WIN
  else
    :TIE
  end
end

def show_outcome(outcome, dealer_hand, player_hand)
  puts "\n" + "- " * 15
  if outcome == :DEALER_WIN
    puts "\tDEALER WINS!"
  elsif outcome == :PLAYER_WIN
    puts "\tPLAYER WINS!"
  elsif outcome == :TIE
    puts "\tIT'S A TIE"
  elsif outcome == :PLAYER_BUSTED
    puts "\tPLAYER BUSTED!"
  elsif outcome == :DEALER_BUSTED
    puts "\tDEALER BUSTED!"
  end

  puts "\nPlayer hand is: #{player_hand}"
  puts "Player score: #{score(player_hand)}"
  puts "Dealer hand is: #{dealer_hand}"
  puts "Dealer score: #{score(dealer_hand)}"
  puts "- " * 15
end

def show_player_hand(hand)
  puts "You have: #{hand.map(&:to_s).join(' ')}"
end

def show_dealer_hand(hand)
  puts "Dealer has: #{hand[0]} and unknown card"
end

play = true
while play
  puts "\n\n\n" + "=" * 30 + "\n\tTHIS IS #{WIN_TOTAL}!"
  puts "=" * 30
  deck = init_deck
  player_hand = [0, 0].map { |_| draw_card(deck) }
  dealer_hand = [0, 0].map { |_| draw_card(deck) }
  player_score = score(player_hand)
  dealer_score = score(dealer_hand)
  state = :PLAYING

  # player_turn
  while state == :PLAYING
    puts "\n"
    show_player_hand(player_hand)
    show_dealer_hand(dealer_hand)
    print "hit or stay? [h/s]: "
    hit = (gets.chomp.downcase == 'h')
    break if !hit

    player_hand << draw_card(deck)
    puts "You drew: #{player_hand[-1]}"

    player_score = score(player_hand)
    state = :PLAYER_BUSTED if player_score > WIN_TOTAL
  end

  # dealer turn
  while state == :PLAYING && dealer_score < DEALER_LIMIT
    dealer_hand << draw_card(deck)
    dealer_score = score(dealer_hand)
    state = :DEALER_BUSTED if dealer_score > WIN_TOTAL
  end

  state = compare_cards(dealer_score, player_score) if state == :PLAYING
  show_outcome(state, dealer_hand, player_hand)

  print "\nPlay again? [y/n]: "
  play = ("yh".include? gets.chomp.downcase)
end
