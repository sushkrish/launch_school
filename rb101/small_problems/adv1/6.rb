def my_method(array)
  [7 * array.first] if array.size == 1
  array.map {|value| value * value}
end

p my_method([])
p my_method([3])
p my_method([3, 4])
p my_method([5, 6, 7])
