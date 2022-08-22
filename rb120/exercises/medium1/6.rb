class GuessingGame
  FROM = 1
  TO = 100
  LIMIT = 7
  STATES = [:PLAYING, :WON, :LOST, :STOP]

  def play
    self.state = :PLAYING
    self.number = Random.new.rand(FROM..TO)
    self.round = 1
    while state != :STOP 
      if state == :PLAYING
        puts "\nYou have #{LIMIT - round + 1} guesses remaining."
        user_guess
        check_outcome
      elsif state == :WON || state == :LOST
        display_result
        self.state = :STOP
      end
    end
  end

  def user_guess
    self.guess = 0
    until guess.between?(FROM, TO) do 
      print "Enter a number between #{FROM} and #{TO}: "
      self.guess = gets.chomp.to_i
      print "Invalid guess. " if (guess < FROM || guess > TO)
    end
    self.round += 1
  end

  def check_outcome
    if guess == number
      self.state = :WON
      puts "That's the number!"
    elsif guess < number
      puts "Your guess is too low."
    elsif
      puts "Your guess is too high"
    end
    
    if state != :WON && round > LIMIT
      self.state = :LOST
    end
  end

  def display_result
    if state == :WON 
      puts "\nYou won!"
    elsif state == :LOST 
      puts "\nNo more guesses. You lost!"
    end
  end

  private
  attr_accessor :number, :round, :guess, :state
end

game = GuessingGame.new
game.play

=begin
You have 7 guesses remaining.
Enter a number between 1 and 100: 104
Invalid guess. Enter a number between 1 and 100: 50
Your guess is too low.

You have 6 guesses remaining.
Enter a number between 1 and 100: 75
Your guess is too low.

You have 5 guesses remaining.
Enter a number between 1 and 100: 85
Your guess is too high.

You have 4 guesses remaining.
Enter a number between 1 and 100: 0
Invalid guess. Enter a number between 1 and 100: 80

You have 3 guesses remaining.
Enter a number between 1 and 100: 81
That's the number!

You won!

game.play

You have 7 guesses remaining.
Enter a number between 1 and 100: 50
Your guess is too high.

You have 6 guesses remaining.
Enter a number between 1 and 100: 25
Your guess is too low.

You have 5 guesses remaining.
Enter a number between 1 and 100: 37
Your guess is too high.

You have 4 guesses remaining.
Enter a number between 1 and 100: 31
Your guess is too low.

You have 3 guesses remaining.
Enter a number between 1 and 100: 34
Your guess is too high.

You have 2 guesses remaining.
Enter a number between 1 and 100: 32
Your guess is too low.

You have 1 guesses remaining.
Enter a number between 1 and 100: 32
Your guess is too low.

You have no more guesses. You lost!
=end
