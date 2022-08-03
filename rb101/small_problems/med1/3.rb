def rotate(arr)
  arr[1..-1] << arr[0]
end

def rotate_rightmost_digits(num, n)
  arr = num.to_s.chars
  (arr[0..-n-1] + rotate(arr[-n..-1])).join.to_i
end

def max_rotation(n)
  l = n.to_s.length
  l.times {|i| n = rotate_rightmost_digits(n,l-i)}
  n
end 

puts max_rotation(735291) == 321579
puts max_rotation(3) == 3
puts max_rotation(35) == 53
puts max_rotation(105) == 15 # the leading zero gets dropped
puts max_rotation(8_703_529_146) == 7_321_609_845
