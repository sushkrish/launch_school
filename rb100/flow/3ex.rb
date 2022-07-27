puts "enter a number between 0 and 100"
n = gets.chomp.to_i
if n > 100
  puts "this is greater than 100"
elsif n > 50
  puts "this is between 51 and 100"
elsif n >= 0 
  puts "this is between 0 and 50"
else
  puts "this is negative"
end 
