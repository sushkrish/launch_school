arr = []
5.times do |n|
  print "Enter number (#{n+1}): "
  arr << gets.chomp.to_i
end

print "Enter the last number: "
last = gets.chomp.to_i
if arr.include? last 
  puts "#{last} is in #{arr}"
else
  puts "#{last} is not in #{arr}"
end

