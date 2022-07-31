def string_to_integer(str)
  n = 0
  chars = str.chars.map {|c| c.ord - 48}
  chars.each {|i| n = n*10 + i}
  n
end 

puts string_to_integer('4321') == 4321
puts string_to_integer('570') == 570
