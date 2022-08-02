def halvsies(arr)
  arr.each_with_object([[],[]]) do |item,(a1,a2)|
    a1.size < (arr.size + 1)/2? a1 << item : a2 << item
  end
end

puts halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
puts halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
puts halvsies([5]) == [[5], []]
puts halvsies([]) == [[], []]
