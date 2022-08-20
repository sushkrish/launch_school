class Board
  SYM1 = 'X'
  SYM2 = 'O'
  EMPTY = '_'
  attr_accessor :grid

  def initialize()
    clear
  end

  def clear
    self.grid = [1,2,3].map {|_v| [EMPTY, EMPTY, EMPTY] } 
  end

  def draw
   puts ""
   3.times do |i|
     print "\n\t\t"
     3.times {|j| print grid[i][j] + " "}
    end
  end

  def who_won?
    sums = []
    g = grid.map do |r|
      r.map do |v|
        case v 
        when SYM1 then -1
        when SYM2 then 1
        else 0
        end
      end
    end
    g.each {|r| sums << r.sum }
    g.transpose.each {|c| sums << c.sum}
    sums << ((0..2).map{|i| g[i][i]}.sum)
    sums << ((0..2).map{|i| g[i][2-i]}.sum)
    sums.each do |val|
      return SYM1 if val == -3
      return SYM2 if val == 3
    end
    return "TIE" if empty_squares.size ==0
    EMPTY
  end

  def mark_square(i, j, mark)
    self.grid[i][j] = mark
  end

  def empty_squares
    indices = (0..2).map {|i| (0..2).map {|j| [i,j]}}
    indices.flatten!(1).select! {|i| grid[i[0]][i[1]] == EMPTY}
  end
end

class Player
  attr_accessor :name, :mark
  def initialize(mark, name = "Computer")
    self.mark = mark
    self.name = name
  end

  def play(board)
    (r,c) = board.empty_squares.sample
    board.mark_square(r, c, mark)
  end
end

class HumanPlayer < Player
  def initialize(mark)
    super(mark)
    puts "What's your name?"
    self.name = gets.chomp.capitalize
  end 

  def play(board)
    print "\n\nPlay where? pick row (1,2,3): "
    r = gets.chomp.to_i - 1
    print "Pick column (1,2,3): "
    c = gets.chomp.to_i - 1
    board.mark_square(r, c, mark)
  end
end

class TTT
  STATES = [:TURN1,:TURN2, :WINNER1, :WINNER2, :TIE, :STOP]
  attr_accessor :player1, :player2, :board, :state
  
  def initialize
    self.player1 = HumanPlayer.new(Board::SYM1)
    self.player2 = Player.new(Board::SYM2)
    self.state = :TURN1
    self.board = Board.new
  end

  def update_state
    case board.who_won?
    when player1.mark then self.state = :WINNER1
    when player2.mark then self.state = :WINNER2
    when "TIE" then self.state = :TIE
    else switch_turns
    end
  end

  def switch_turns
    self.state = ( state == :TURN1 ? :TURN2 : :TURN1)
  end

  def display_result
    puts "\n" + "**"*20
    case state
    when :TIE then puts "It's a TIE!"
    when :WINNER1 then puts "#{player1.name} WINS!"
    when :WINNER2 then puts "#{player2.name} WINS!"
    end
    puts "**"*20
  end

  def new_game
    self.state = :TURN1
    board.clear
    puts ""
    puts "=="*20 
    puts "This is TIC TAC TOE!"
    board.draw
  end

  def prompt_play_again
    print "Hit y to play again: "
    input = gets.chomp.downcase
    if input == 'y'
      new_game
    else
      self.state = :STOP
    end
  end

  def take_turn(player)
    player.play(board)
    puts "\n #{player.name} played:"
    board.draw
    update_state
  end

  def play
    new_game
    while state != :STOP
      if state == :TURN1
        take_turn(player1)
      elsif state == :TURN2
        take_turn(player2)
      elsif [:TIE, :WINNER1, :WINNER2].include? state
        display_result
        prompt_play_again
      end
    end
  end
end

game = TTT.new
game.play
