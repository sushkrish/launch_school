def count_occurrences(arr)
  counts = Hash.new(0)
  arr.each {|item| counts[item] = counts[item]+1}
  counts
end

vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck','motorcycle', 'motorcycle', 'car', 'truck']
p count_occurrences(vehicles)
