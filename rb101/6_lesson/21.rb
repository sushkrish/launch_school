CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, :jack, :queen, :king, :ace]
STATE = [:PLAYING, :PLAYER_BUSTED, :DEALER_BUSTED, :PLAYER_WIN, :DEALER_WIN, :TIE]

def init_deck
  { heart: CARDS.clone,
    diamond: CARDS.clone,
    clover: CARDS.clone,
    spade: CARDS.clone }
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
  suit = deck.keys.sample
  deck[suit].shuffle!
  deck[suit].pop
end

def score(hand)
  # returns max possible score less than 21
  total = hand.map { |c| card_value(c) }.sum
  num_aces = hand.count { |c| c == :ace }
  num_aces.times { total -= 10 if total > 21 }
  total
end

def compare_cards(dealer_hand, player_hand)
  dealer_score = score(dealer_hand)
  player_score = score(player_hand)

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
  puts "\n\n\n" + "=" * 30 + "\n\tTHIS IS 21!"
  puts "=" * 30
  deck = init_deck
  player_hand = [0, 0].map { |_| draw_card(deck) }
  dealer_hand = [0, 0].map { |_| draw_card(deck) }
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

    state = :PLAYER_BUSTED if score(player_hand) > 21
  end

  # dealer turn
  while state == :PLAYING && score(dealer_hand) < 17
    dealer_hand << draw_card(deck)
    state = :DEALER_BUSTED if score(dealer_hand) > 21
  end

  state = compare_cards(dealer_hand, player_hand) if state == :PLAYING
  show_outcome(state, dealer_hand, player_hand)

  print "\nPlay again? [y/n]: "
  play = (gets.chomp.downcase == 'y')
end
