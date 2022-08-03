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

def merge_sort(arr)
  return arr if arr.size == 1
  mid = arr.size/2
  merge(merge_sort(arr[0...mid]),merge_sort(arr[mid...arr.size]))
end

p merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9]
p merge_sort([5, 3]) == [3, 5]
p merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
p merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
p merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
