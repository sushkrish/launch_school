def reverse_words(sentence)
  sentence.split(" ").map{ |w| w.length > 5? w.reverse : w}.join(" ")
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS
