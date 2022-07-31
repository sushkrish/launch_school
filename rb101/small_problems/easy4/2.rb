def century(n)
  cent = (n/100 == (n-1)/100)? n/100 + 1 : n/100
  if cent % 10 == 1 && cent%100 != 11
    cent.to_s + "st"
  elsif cent % 10 == 2 && cent%100 != 12
    cent.to_s + "nd"
  elsif cent % 10 == 3 && (cent%100 != 13)
    cent.to_s + "rd"
  else
    cent.to_s + "th"
  end
end 

puts century(2000) == '20th'
puts century(2001) == '21st'
puts century(1965) == '20th'
puts century(256) == '3rd'
puts century(5) == '1st'
puts century(10103) == '102nd'
puts century(1052) == '11th'
puts century(1127) == '12th'
puts century(11201) == '113th'
