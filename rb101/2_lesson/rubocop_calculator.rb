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
  return Kernel.puts("can't divide by 0") if num2.zero?

  num1 / num2
end

Kernel.puts('Enter the first number: ')
n1 = Kernel.gets.chomp.to_i
Kernel.puts('Enter the second number: ')
n2 = Kernel.gets.chomp.to_i
Kernel.puts("Which operation?
            A for addition
            S for subtraction
            M for multiplication
            D for divide")
op = Kernel.gets.chomp.upcase

case op
when 'A' then puts("#{n1} + #{n2} = #{add(n1, n2)}")
when 'S' then puts("#{n1} - #{n2} = #{sub(n1, n2)}")
when 'M' then puts("#{n1} * #{n2} = #{mul(n1, n2)}")
when 'D' then puts("#{n1} / #{n2} = #{div(n1, n2)}")
end
