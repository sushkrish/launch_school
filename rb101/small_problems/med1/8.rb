def fib_tail(i, prev=1, prev2prev=1)
  return prev2prev if i == 1
  return prev if i == 2
  fib_tail( i-1, prev2prev + prev, prev)
end

def fibonacci(n)
  fib_tail(n)
end 
    
puts fibonacci(1) == 1
puts fibonacci(2) == 1
puts fibonacci(3) == 2
puts fibonacci(4) == 3
puts fibonacci(5) == 5
puts fibonacci(12) == 144
puts fibonacci(20) == 6765
puts fibonacci(100)
