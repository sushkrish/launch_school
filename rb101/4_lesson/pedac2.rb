#(n-1)*(n)/2 + 1 <== row n starts with this index of number is sequence
# sqx[idx] = 2*(idx)
# sqx[idx+row-1]

def row_sum(row)
  start_idx = (row * (row-1)/2) + 1
  (2*start_idx..2*(start_idx+row-1)).step(2).to_a.reduce(:+)
end

puts row_sum(1) == 2
puts row_sum(2) == 10
puts row_sum(3) == 30
puts row_sum(4) == 68

