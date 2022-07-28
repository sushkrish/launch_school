puts "What's the bill amount?"
bill = gets.chomp.to_f

puts "what's the tip percentage?"
tip_perc = gets.chomp.to_f
tip = tip_perc/100 * bill

puts "The tip is $#{tip.round(2)}"
puts "The total is $#{(bill+tip).round(2)}"

