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
  puts 'Enter the ' + ordinal + ' number'
  num = gets.chomp
  if num.to_f.to_s == num
    num.to_f
  elsif num.to_i.to_s == num
    num.to_i
  else
    puts 'this is not a valid number'
    get_valid_num(ordinal)
  end
end

loop do
  puts 'Welcome to Calculator'
  n1 = get_valid_num('first')
  n2 = get_valid_num('second')
  puts("Which operation?
    A for addition
    S for subtraction
    M for multiplication
    D for divide")
  op = gets.chomp.upcase

  case op
  when 'A' then puts("#{n1} + #{n2} = #{add(n1, n2)}")
  when 'S' then puts("#{n1} - #{n2} = #{sub(n1, n2)}")
  when 'M' then puts("#{n1} * #{n2} = #{mul(n1, n2)}")
  when 'D'
    begin
      puts "#{n1} / #{n2} = #{div(n1, n2)}"
    rescue ZeroDivisionError
      puts "Can't divide by zero"
    end
  end

  puts 'Another calculation? y/n?'
  repeat = gets.chomp.downcase
  break if repeat == 'n'
end
