def merge(arr1,arr2)
  (arr1 + arr2).sort.each_with_object([]) do |i,merged| 
    merged << i if merged == [] || merged[-1] != i
  end
end

puts merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]
