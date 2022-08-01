def swapcase(str)
  str.chars.each_with_object("") do |ch , new_str|
    ch.downcase == ch ? new_str << ch.upcase : new_str << ch.downcase
  end
end

puts swapcase('CamelCase') == 'cAMELcASE'
puts swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'
