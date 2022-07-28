puts "Ex1"
10.times {|n| puts "The Flintstones Rock!".rjust(n+1+"The Flintstones Rock".length)}

puts "\n Ex2"
puts "the value of 40 +2 is #{40+2}"

puts "\n Ex3" 
def factors(number)
  return nil if number <= 0
  divisor = number
  factors = []
  (1..number).each { |divisor| factors << number / divisor if number % divisor == 0 }
  factors
end
puts factors(0), factors(-10), factors(10)

# Ex4
# Changes the array provided by the caller when using <<.

#Ex5
# provide limit as a method parameter or create it as a constant.

#Ex6
# 34 - answer is not modified by the function.

#Ex7
#yes, data is changed as the original hash table is updated by the method.

#Ex8
#Paper

#Ex9
#"no"
