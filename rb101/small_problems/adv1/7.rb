def merge(arr1, arr2)
  i, j = 0, 0
  merged = []
  loop do
    if i == arr1.size 
      merged = merged + arr2[j...arr2.size]
      break
    elsif j == arr2.size 
      merged = merged + arr1[i...arr1.size]
      break 
    elsif arr1[i] <= arr2[j]
      merged << arr1[i]
      i += 1
    else 
      merged << arr2[j]
      j += 1
    end
  end
  merged
end

p merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]
