def word_sizes(sentence)
  sentence.split(" ").each_with_object(Hash.new(0)) do |word, h|
    word_len = word.count('a-zA-Z')
    h[word_len] = h[word_len] + 1
  end
end

puts word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2}
puts word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3}
puts word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
puts word_sizes('') == {}
