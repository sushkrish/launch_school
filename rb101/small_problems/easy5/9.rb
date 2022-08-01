def crunch(str)
  (str.chars.inject([]) do |s, ch|
    if s.size == 0
      s = [ch]
    else
      s[-1]==ch ? s : s<<ch
    end
  end).join
end

puts crunch('ddaaiillyy ddoouubbllee') == 'daily double'
puts crunch('4444abcabccba') == '4abcabcba'
puts crunch('ggggggggggggggg') == 'g'
puts crunch('a') == 'a'
puts crunch('') == ''
