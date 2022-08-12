#input: array of numbers arr
#output: array of nums result. there are result[i] uniq nums in arr which are less than arr[i]
=begin
approach:
iterate through each num in arr
  count how many uniq nums in arr are less than num 
=end

def smaller_numbers_than_current(arr)
  arr_unique = arr.uniq
  arr.map do |num|
    arr_unique.count {|num2| num2 < num}
  end 
end

# Given an array of numbers, for each number find out how many numbers in the array are smaller than it. When counting numbers, only count  unique values. That is, if a given number occurs multiple times in the array, it should only be counted once.

# Examples:
p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4]) == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]

# The tests above should print "true".
