def display_results(x,y)
  puts "#{x} + #{y} = #{x+y}"
  puts "#{x} - #{y} = #{x-y}"
  puts "#{x} * #{y} = #{x*y}"
  puts "#{x} / #{y} = #{x/y}"
  puts "#{x} ** #{y} = #{x**y}"
end

print "Enter the first number: "
n1 = gets.chomp.to_f
print "Enter the second number: "
n2 = gets.chomp.to_f
display_results(n1,n2)

