def transpose(arr)
  #arr is 2d
  (0..(arr[0].size-1)).to_a.map do |i|
    (0..(arr.size-1)).to_a.map {|j| arr[j][i]}
  end
end

matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

new_matrix = transpose(matrix)

p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
