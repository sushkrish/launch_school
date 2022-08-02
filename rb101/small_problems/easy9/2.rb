def is_double_num?(n)
  ns = n.to_s
  l = ns.length
  l.even? && (ns[0..l/2-1] == ns[l/2..l-1])
end

def twice(n)
  is_double_num?(n) ? n : 2*n
end

puts twice(37) == 74
puts twice(44) == 44
puts twice(334433) == 668866
puts twice(444) == 888
puts twice(107) == 214
puts twice(103103) == 103103
puts twice(3333) == 3333
puts twice(7676) == 7676
puts twice(123_456_789_123_456_789) == 123_456_789_123_456_789
puts twice(5) == 10
