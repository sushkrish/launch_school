def display_response(name)
  puts name[-1]!='!'? "Hello #{name}." : "Hello #{name}. Why are we screaming?".upcase
end 

puts "What is your name?"
name = gets.chomp
display_response(name)
