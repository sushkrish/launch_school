OPTIONS = { R: 'Rock', P: 'Paper', S: 'Scissor', L: 'Lizard', O: 'Spock' }
CHOICE = { R: 0, P: 1, S: 2, O: 3, L: 4 }

def get_user_pick
  user_pick = nil
  until OPTIONS.keys.include? user_pick
    print "Pick an option: #{OPTIONS.keys.join(' ')}? "
    user_pick = gets.chomp.upcase.to_sym
  end
  user_pick
end

def pick_winner(user_pick, machine_pick)
  diff = CHOICE[user_pick] - CHOICE[machine_pick]
  return 0 if diff.zero? # tie
  return -1 if [-1, 2, -3, 4].include? diff # user loses
  1 # user wins
end

puts "This is Rock Paper Scissors Lizard Spock! Best of 5"
rounds = 5
user_wins = 0
machine_wins = 0
rounds.times do |round|
  puts "Round #{round}: You #{user_wins} vs Computer #{machine_wins} so far"
  user_pick = get_user_pick
  machine_pick = OPTIONS.keys.sample
  puts "Your #{OPTIONS[user_pick]} VS Computer's #{OPTIONS[machine_pick]}"

  winner = pick_winner(user_pick, machine_pick)
  if winner == -1
    machine_wins += 1
    puts "Computer wins!"
  elsif winner == 1
    user_wins += 1
    puts "You win!"
  else
    puts "TIE"
  end
  puts "\n\n"
end

puts "YOU #{user_wins} vs COMPUTER #{machine_wins}"
if user_wins > machine_wins
  puts "YOU WIN THIS GAME!"
elsif machine_wins > user_wins
  puts "SORRY, YOU LOST."
else
  puts "IT'S A TIE"
end
puts "\n\n"
