# Write a method that takes one argument: an array of integers.
# The method should return the minimum sum of 5 consecutive
# numbers in the array. If the array contains fewer than 5
# elements, the method should return nil.

#input array of nums arr
#output nil or min sum of 5 consecutive elements of arr
=begin
approach
nil if arr.size < 5 
initialize a min var with sum of first 5 elements
starting at index 1, sum of next 5 elements. if it's lesser than min var, then replace min var.
stop when we hit arr size
=end

def minimum_sum(arr)
  nil if arr.size < 5
  (0..arr.size-5).to_a.map {|i| arr[i...i+5].sum}.min
end

# Examples:

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10

# The tests above should print "true".
