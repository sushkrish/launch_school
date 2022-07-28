M_TO_FEET = 3.28

def area_in_ft(l,w)
  (l*M_TO_FEET*w*M_TO_FEET).round(2)
end

puts "Enter the width in m"
w = gets.chomp.to_f
puts "Enter length in m"
l = gets.chomp.to_f
puts "Area of the room is #{l*w} sq meters (#{area_in_ft(l,w)} sq feet)"

