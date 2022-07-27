OPTIONS = { R: 'Rock', P: 'Paper', S: 'Scissor' }
CHOICE = { R: 0, P: 1, S: 2 }

def get_user_pick
  user_pick = nil
  until OPTIONS.keys.include? user_pick
    print "Pick an option: #{OPTIONS.keys.join(' ')}? "
    user_pick = gets.chomp.upcase.to_sym
  end
  user_pick
end

def display_winner(user_pick, machine_pick)
  puts "Your #{OPTIONS[user_pick]} VS Computer's #{OPTIONS[machine_pick]}"
  diff = CHOICE[user_pick] - CHOICE[machine_pick]
  if diff.zero?
    puts "It's a tie!"
  elsif [-1, 2].include? diff
    puts "Computer wins :("
  else
    puts "You win!"
  end
end

puts "This is Rock Paper Scissors!"
loop do
  user_pick = get_user_pick
  machine_pick = OPTIONS.keys.sample
  display_winner(user_pick, machine_pick)
  
  puts "Play again? y/n"
  play = gets.chomp.downcase
  break if play == 'n'
end
