def add(n1, n2)
  return n1 + n2
end

def sub(n1, n2)
  return n1 - n2
end

def mul(n1, n2)
  return n1 * n2
end

def div(n1, n2)
  return Kernel.puts("can't divide by 0") if n2 == 0
  return n1 / n2
end

Kernel.puts("Enter the first number: ")
n1 = Kernel.gets().chomp().to_i()
Kernel.puts("Enter the second number: ")
n2 = Kernel.gets().chomp().to_i()
Kernel.puts("Which operation?
            A for addition
            S for subtraction
            M for multiplication
            D for divide") 
op = Kernel.gets().chomp().upcase()

case op
when 'A' then puts("#{n1} + #{n2} = #{add(n1,n2)}")
when 'S' then puts("#{n1} - #{n2} = #{sub(n1,n2)}")
when 'M' then puts("#{n1} * #{n2} = #{mul(n1,n2)}")
when 'D' then puts("#{n1} / #{n2} = #{div(n1,n2)}")
end

