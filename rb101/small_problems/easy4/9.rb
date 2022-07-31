def integer_to_string(n)
  str = []
  loop do 
    str << n%10
    n = n / 10
    break if n == 0
  end 
  str.reverse.join("")
end

puts integer_to_string(4321) == '4321'
puts integer_to_string(0) == '0'
puts integer_to_string(5000) == '5000'
