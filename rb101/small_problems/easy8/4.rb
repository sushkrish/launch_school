def substrings(str)
  ((0..str.length-1).to_a.map do |i|
    (i..str.length-1).to_a.map do |j|
      str[i..j]
    end
  end).flatten
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]
