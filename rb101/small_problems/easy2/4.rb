require 'date'

puts "What is your age?"
age = gets.chomp.to_i

puts "At what age would you like to retire?"
retirement_age = gets.chomp.to_i

years_to_retire = retirement_age - age
current_year = Date.today.year
retirement_year = current_year + years_to_retire
puts "It's #{current_year}. You will retire in #{retirement_year}."
puts "You have only #{years_to_retire} years of work to do!"
