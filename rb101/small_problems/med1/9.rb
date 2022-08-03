def fibonacci(n)
  prev,cur = 1,1
  (n-2).times {cur,prev = cur+prev, cur}
  cur
end
puts fibonacci(1) == 1
puts fibonacci(2) == 1
puts fibonacci(3) == 2
puts fibonacci(20) == 6765
puts fibonacci(100) == 354224848179261915075
fibonacci(100_001) # => 4202692702.....8285979669707537501
