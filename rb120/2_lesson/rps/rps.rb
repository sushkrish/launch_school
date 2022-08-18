class Moves
  def self.move
    @@MOVES.sample
  end

  def self.compare(move1, move2)
    if @@RULES[move1] == move2
      -1
    elsif @@RULES[move2] == move1
      1
    else
      0
    end
  end

  def self.show_options
    @@MOVES.each { |move| puts "#{move.to_s[0]} for #{move}" }
  end

  def self.to_move(input)
    case input.downcase
    when 'r' || 'rock' then :ROCK
    when 'p' || 'paper' then :PAPER
    when 's' || 'scissor' then :SCISSOR
    end
  end

  @@MOVES = [:ROCK, :PAPER, :SCISSOR]
  @@RULES = { ROCK: :SCISSOR, PAPER: :ROCK, SCISSOR: :PAPER }
end

class Player
  attr_accessor :name, :move

  def initialize(name)
    self.name = name.capitalize
    self.move = nil
  end

  def choose
    self.move = Moves.move
  end

  def show_move()
    puts "#{name} picked #{move}"
  end
end

class HumanPlayer < Player
  def initialize(_name)
    print "What is your name? "
    self.name = gets.chomp.capitalize
  end

  def choose
    puts "Pick your move"
    Moves.show_options
    self.move = Moves.to_move(gets.chomp)
  end
end

class Game
  attr_accessor :player, :computer, :state

  def initialize
    self.player = HumanPlayer.new("player")
    self.computer = Player.new("Computer")
    self.state = :PLAYING
  end

  def display_winner(players, result)
    draw_line('**')
    if result == 0
      puts "It's a tie!"
    elsif result == 1
      puts "#{players[1].name} is the Winner!!"
    elsif result == -1
      puts "#{players[0].name} is the Winner!!"
    end
    draw_line('**')
  end

  def draw_line(ch = '==')
    puts ch * 20
  end

  def play
    draw_line

    player.choose
    player.show_move()

    computer.choose
    computer.show_move()

    result = Moves.compare(player.move, computer.move)
    display_winner([player, computer], result)
  end

  def playing?
    state == :PLAYING
  end

  def stop_game
    self.state = :STOPPED
  end
end

rps = Game.new
while rps.playing?
  rps.play
  print "Play again? "
  input = gets.chomp.downcase
  rps.stop_game if input.include? 'n'
end
