def consonant?(ch)
  ch.downcase.ord.between?('a'.ord, 'z'.ord) && !('aeiouAEIOU'.include? ch)
end

def double_consonants(str)
  str.chars.map{|ch| consonant?(ch) ? ch+ch : ch}.join
end

puts double_consonants('String') == "SSttrrinngg"
puts double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
puts double_consonants("July 4th") == "JJullyy 4tthh"
puts double_consonants('') == ""
