TEXT2NUM = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9}

def word_to_digit(sentence)
  TEXT2NUM.keys.each do |n|
    sentence.gsub!(/\b#{n.to_s}\b/, TEXT2NUM[n].to_s)
  end
  sentence
end

puts word_to_digit('Please call me at five five five one two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'


