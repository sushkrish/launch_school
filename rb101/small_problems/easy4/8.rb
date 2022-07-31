def string_to_signed_integer(str)
  n = 0
  sign = 1
  if str[0]=='+'
    str = str[1,str.length]
  elsif str[0]=='-'
    str = str[1,str.length]
    sign = -1
  end
  chars = str.chars.map {|c| c.ord - 48}
  chars.each {|i| n = n*10 + i}
  sign * n 
end 

puts string_to_signed_integer('4321') == 4321
puts string_to_signed_integer('-570') == -570
puts string_to_signed_integer('+100') == 100
