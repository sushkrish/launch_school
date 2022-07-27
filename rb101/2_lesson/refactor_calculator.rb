require 'yaml'
require 'pry'
MESSAGES = YAML.load_file('calculator_messages.yml')
LANGUAGE = 'en'
puts MESSAGES.inspect

def msg(key)
  MESSAGES[LANGUAGE][key]
end

def add(num1, num2)
  num1 + num2
end

def sub(num1, num2)
  num1 - num2
end

def mul(num1, num2)
  num1 * num2
end

def div(num1, num2)
  num1 / num2
end

def get_valid_num(ordinal)
  puts msg("enter_p1") + msg(ordinal) + msg("enter_p2")
  num = gets.chomp
  if num.to_f.to_s == num
    num.to_f
  elsif num.to_i.to_s == num
    num.to_i
  else
    puts msg("invalid_number")
    get_valid_num(ordinal)
  end
end

loop do
  puts msg("welcome")
  n1 = get_valid_num("ord_first")
  n2 = get_valid_num("ord_second")
  puts msg("pick_operation")
  op = gets.chomp.upcase

  case op
  when 'A' then puts("#{n1} + #{n2} = #{add(n1, n2)}")
  when 'S' then puts("#{n1} - #{n2} = #{sub(n1, n2)}")
  when 'M' then puts("#{n1} * #{n2} = #{mul(n1, n2)}")
  when 'D'
    begin
      puts "#{n1} / #{n2} = #{div(n1, n2)}"
    rescue ZeroDivisionError
      puts msg("zero_div_error")
    end
  end

  puts msg("repeat?")
  repeat = gets.chomp.downcase
  break if repeat == 'n'
end
