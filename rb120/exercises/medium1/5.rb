class MinilangError < StandardError; end
class InvalidTokenError <MinilangError; end
class EmptyStackError < MinilangError; end

class Minilang
  TOKENS = %w(PUSH ADD SUB MULT DIV MOD POP PRINT)
  attr_reader :expr

  def initialize(expr)
    @expr = expr
  end

  def eval
    self.stack = []
    self.register = nil
    expr.split.each do |token|
      begin 
        self.eval_token(token)
      rescue MinilangError => error
        puts error.message
        break
      end
    end
  end
  
  private
  attr_accessor :stack, :register

  def eval_token(token)
    if TOKENS.include? token
      self.send token
    elsif token.to_i.to_s == token
      self.register = token.to_i
    else
      raise InvalidTokenError.new("#{token} is Invalid.")
    end
  end

  def pop_stack
    raise EmptyStackError.new("Empty Stack.") if self.stack.empty?
    self.stack.shift
  end

  def PUSH
    self.stack << self.register
  end

  def ADD
    self.register += pop_stack
  end

  def SUB
    self.register -= pop_stack
  end

  def MULT
    self.register *= pop_stack
  end

  def DIV
    self.register /= pop_stack
  end

  def MOD
    self.register = self.register % pop_stack
  end

  def POP
    self.register = pop_stack
  end

  def PRINT
    puts self.register
  end
end

Minilang.new('PRINT').eval
# 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# 10
# 5

Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# (nothing printed; no PRINT commands)
