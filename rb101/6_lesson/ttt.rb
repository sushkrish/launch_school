BOARD_SIZE = 3
EMPTY, USER, COMPUTER = 0, 1, -1
MARKER = {EMPTY => "_", USER => "X", COMPUTER => "O"}
STATES = [:PLAYING, :USER_WIN, :COMPUTER_WIN, :TIE]

def get_new_board
  (1..BOARD_SIZE).map {|i| [EMPTY, EMPTY, EMPTY]}
end

def display_board(board)
  puts " "
  BOARD_SIZE.times do |i|
    print "\t\t\t"
    BOARD_SIZE.times {|j| print (MARKER[board[i][j]] + " ")}
    print "\n"
  end
end

def get_computer_move(board)
  #player_num has to be 0 or 1.
  empty = []
  BOARD_SIZE.times do |i|
    BOARD_SIZE.times { |j| empty << [i,j] if (board[i][j] == EMPTY)}
  end
  empty.sample
end

def get_player_move(board)
  r, c = 0, 0
  loop do 
    print "\n\nPlay where? Pick Row (1,2,3)? "
    r = gets.chomp.to_i - 1
    print "Play where? Pick Column (1,2,3)? "
    c = gets.chomp.to_i - 1
    break if r.between?(0,2) && c.between?(0,2) && (board[r][c] == EMPTY)
    puts "INVALID! TRY AGAIN -- "
  end
  [r,c]
end

def mark_square(board, sq, player)
  #player has to be USER or COMPUTER
  #square has to be of form [i,j]
  board[sq[0]][sq[1]] = player
  board
end

def get_board_state(board)
  h_sums = board.map {|r| r.reduce(:+)}
  v_sums = board.transpose.map {|c| c.reduce(:+)}
  d1 = (0...BOARD_SIZE).to_a.inject(0) {|s, i| s + board[i][i]}
  d2 = (0...BOARD_SIZE).to_a.inject(0) {|s, i| s + board[i][BOARD_SIZE - i - 1]}
  all = ((h_sums + v_sums) << d1 << d2)
  return :USER_WIN if all.any? {|i| i == USER*3}
  return :COMPUTER_WIN if all.any? {|i| i == COMPUTER*3}
  return :TIE if board.flatten.none? {|i| i.zero?}
  :PLAYING
end

def display_result(state)
  case state
  when :USER_WIN then puts "\n\t\tYou won!!!\n\n"
  when :COMPUTER_WIN then puts "\n\t\tAww.. you lost\n\n"
  when :TIE then puts "\n\t\tIt's a tie\n\n"
  end
end 

play = true
  while play do
  board = get_new_board
  state = :PLAYING
  puts "\n\t\tTHIS IS TIC TAC TOE"
  display_board(board)
  while state == :PLAYING do
    #user move
    board = mark_square(
      board, get_player_move(board), USER)
    puts "\n\t\tYOU PLAYED: "
    display_board(board)
    state = get_board_state(board)
    break if state != :PLAYING

    #computer move
    board = mark_square(
      board, get_computer_move(board), COMPUTER)
    puts "\n\t\tCOMPUTER PLAYED: "
    display_board(board)
    state = get_board_state(board)
  end
  
  display_result(state)
  print "\n\n Do you want to play again? Y/N: "
  play = (gets.chomp.downcase == 'y')
end 
