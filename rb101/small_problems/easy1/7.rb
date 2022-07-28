def stringy(number)
  res = (0..(number-1)).to_a.map{|i| i%2 == 0? '1':'0' }
  res.join("")
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'
