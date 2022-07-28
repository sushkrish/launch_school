def sum_upto(n)
  (1..n).to_a.reduce(:+)
end

def product_upto(n)
  (1..n).to_a.reduce(:*)
end

print "provide an integer > 0: "
n = gets.chomp.to_i
print "Enter 's' for sum | 'p' for product: "
choice = gets.chomp.downcase
case choice
when 's' then puts "Sum of integers between 1 and #{n} is: #{sum_upto(n)}"
when 'p' then puts "Product of integers between 1 and #{n} is: #{product_upto(n)}"
end
