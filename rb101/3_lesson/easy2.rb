puts "Ex1"
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
puts !ages["Spot"].nil?
puts ages.include? "Spot"
puts ages.key? "Spot"

puts "\n Ex2"
munsters_description = "The Munsters are creepy in a good way."
s = munsters_description
puts s.swapcase
puts s.capitalize
puts s.downcase
puts s.upcase

puts "\n Ex3"
additional_ages = { "Marilyn" => 22, "Spot" => 237 }
ages.merge!(additional_ages)
puts ages

puts "\n Ex4"
advice = "Few things in life are as important as house training your pet dinosaur."
puts advice.include? "Dino"

=begin
Ex 5
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
=end

puts "\n Ex6"
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
flintstones << "Dino"
puts flintstones

puts "\n Ex7"
flintstones.insert(-1,"Dino", "Hoppy")
puts flintstones

puts "\n Ex8"
advice = "Few things in life are as important as house training your pet dinosaur."
puts advice.slice!("Few things in life are as important as ")
puts advice
=begin
advice.slice!(0, advice.index('house'))  # => "Few things in life are as important as "
p advice # => "house training your pet dinosaur."
=end

puts "\n Ex9"
statement = "The Flintstones Rock!"
puts statement.count('t')

puts "\n Ex10"
title = "Flintstone Family Members"
puts title.center(40)
