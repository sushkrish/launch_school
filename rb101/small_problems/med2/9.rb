def bubble_sort!(arr)
  loop do 
    swapped = false
    1.upto(arr.size-1) do |i|
      if arr[i-1] > arr[i]
        arr[i], arr[i-1] = arr[i-1], arr[i]
        swapped = true
      end
    end 
    break if swapped == false
  end
  nil
end

array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
bubble_sort!(array)
p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
