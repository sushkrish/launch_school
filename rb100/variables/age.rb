puts "how old are you?"
age = gets.chomp.to_i
time = [10,20,30,40]
time.each{|x| puts "In #{x} years, you will be:\n #{x+age}" }
