# Write a method that takes an array of integers and returns the two numbers that are closest together in value.

#create pairs
#map each pair to absolute diff, get min index
#return pair at min index 
#OR
#for each num in array, get abs diff with every other num, keep track of min and return it at the end. 

def closest_numbers(arr)
  a, b = arr[0], arr[1]
  min_diff = (arr[0] - arr[1]).abs
  
  0.upto(arr.size - 1) do |i|
    (i+1).upto(arr.size - 1) do |j|
      if (arr[i] - arr[j]).abs < min_diff
        min_diff = (arr[i] - arr[j]).abs
        a, b = arr[i], arr[j]
      end
    end
  end
  
  [a, b]
end

# Examples:

p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]

# The tests above should print "true".
