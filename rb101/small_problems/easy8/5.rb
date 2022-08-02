def substrings(str)
  ((0..str.length-1).to_a.map do |i|
    (i..str.length-1).to_a.map do |j|
      str[i..j]
    end
  end).flatten
end

def palindromes(str)
  substrings(str).select{|sub| sub == sub.reverse && sub.length>1}
end

puts palindromes('abcd') == []
puts palindromes('madam') == ['madam', 'ada']
puts palindromes('hello-madam-did-madam-goodbye') == [
    'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
      'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
        '-madam-', 'madam', 'ada', 'oo'
]
puts palindromes('knitting cassettes') == [
    'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]
