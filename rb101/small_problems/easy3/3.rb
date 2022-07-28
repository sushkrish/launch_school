def num_chars(str)
  str.length - str.count(" ")
end

print "Please write word or multiple words: "
input = gets.chomp

puts "There are #{num_chars(input)} characters in #{input}"
