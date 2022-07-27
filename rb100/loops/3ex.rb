def countdown(n)
  return if n < 0 
  puts n 
  countdown(n - 1)
end

puts "how many left?"
n = gets.chomp.to_i
countdown(n)
