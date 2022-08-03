def unique_digits?(n)
  arr = [0]*10
  n.to_s.chars.each do |d|
    arr[d.to_i] += 1
    return false if arr[d.to_i] > 1
  end
  true
end

def find_next_odd_7(n)
  n += (7 - (n % 7))
  n.odd? ? n : n + 7
end

def featured(n)
  i = find_next_odd_7(n)
  loop do
    return "Not possbile"  if i.to_s.length > 10 
    return i if unique_digits?(i)
    i += 14
  end  
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

p featured(9_999_999_999) # -> There is no possible number that fulfills those requirements
