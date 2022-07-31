def signed_integer_to_string(n)
  sign = ""
  if n < 0
    sign = "-"
    n *= -1 
  end
  str = []
  loop do 
    str << n%10
    n = n / 10
    break if n == 0
  end 
  sign + str.reverse.join("")
end

puts signed_integer_to_string(4321) == '4321'
puts signed_integer_to_string(0) == '0'
puts signed_integer_to_string(5000) == '5000'
puts signed_integer_to_string(-123) == '-123'
