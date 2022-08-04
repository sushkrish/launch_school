BOARD_SIZE = 3
EMPTY = 0
USER = 1
COMPUTER = -1
MARKER = { EMPTY => "_", USER => "X", COMPUTER => "O" }
STATES = [:PLAYING, :USER_WIN, :COMPUTER_WIN, :TIE]

def new_board
  (1..BOARD_SIZE).map { |_i| [EMPTY, EMPTY, EMPTY] }
end

def display_board(board)
  puts " "
  BOARD_SIZE.times do |i|
    print "\t\t\t"
    BOARD_SIZE.times { |j| print(MARKER[board[i][j]] + " ") }
    print "\n"
  end
end

def computer_move(board)
  # player_num has to be 0 or 1.
  empty = []
  BOARD_SIZE.times do |i|
    BOARD_SIZE.times { |j| empty << [i, j] if board[i][j] == EMPTY }
  end
  empty.sample
end

def player_move(board)
  r = 0
  c = 0
  loop do
    print "\n\nPlay where? Pick Row (1,2,3)? "
    r = gets.chomp.to_i - 1
    print "Play where? Pick Column (1,2,3)? "
    c = gets.chomp.to_i - 1
    break if r.between?(0, 2) && c.between?(0, 2) && (board[r][c] == EMPTY)
    puts "INVALID! TRY AGAIN -- "
  end
  [r, c]
end

def mark_square(board, sq, player)
  # player has to be USER or COMPUTER
  # square has to be of form [i,j]
  board[sq[0]][sq[1]] = player
  board
end

def board_state_sums(board)
  h_sums = board.map { |r| r.reduce(:+) }
  v_sums = board.transpose.map { |c| c.reduce(:+) }
  diag = (1...BOARD_SIZE).to_a
  d1 = diag.inject(0) { |s, i| s + board[i][i] }
  d2 = diag.inject(0) { |s, i| s + board[i][BOARD_SIZE - i - 1] }
  (h_sums + v_sums) << d1 << d2
end

def board_state(board)
  all = board_state_sums(board)
  if board.flatten.none?(&:zero?)
    :TIE
  elsif all.any? { |i| i == USER * 3 }
    :USER_WIN
  elsif all.any? { |i| i == COMPUTER * 3 }
    :COMPUTER_WIN
  else
    :PLAYING
  end
end

def display_result(state)
  case state
  when :USER_WIN then puts "\n\t\tYou won!!!\n\n"
  when :COMPUTER_WIN then puts "\n\t\tAww.. you lost\n\n"
  when :TIE then puts "\n\t\tIt's a tie\n\n"
  end
end

play = true
while play
  board = new_board
  state = :PLAYING
  puts "\n\t\tTHIS IS TIC TAC TOE"
  display_board(board)
  while state == :PLAYING
    # user move
    board = mark_square(
      board, player_move(board), USER
    )
    puts "\n\t\tYOU PLAYED: "
    display_board(board)
    state = board_state(board)
    break if state != :PLAYING

    # computer move
    board = mark_square(
      board, computer_move(board), COMPUTER
    )
    puts "\n\t\tCOMPUTER PLAYED: "
    display_board(board)
    state = board_state(board)
  end

  display_result(state)
  print "\n\n Do you want to play again? Y/N: "
  play = (gets.chomp.downcase == 'y')
end
