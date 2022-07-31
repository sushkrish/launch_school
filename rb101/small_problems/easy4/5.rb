def multisum(n)
  sum = 0
  (n+1).times do |i|
    if i%3 == 0 || i%5 == 0
      sum+=i
    end 
  end
 sum 
end

puts multisum(3) == 3
puts multisum(5) == 8
puts multisum(10) == 33
puts multisum(1000) == 234168
