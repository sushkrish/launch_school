puts "give me positive four digit number"
n = gets.chomp.to_i
if n < 0
  puts "this is not positive"
else
  4.times{
    r = n % 10
    n = n / 10
    puts r
  }
end
